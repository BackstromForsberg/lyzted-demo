import type { QueryResult } from "pg";
import { pool } from "../db/db.js";
import type { Listing } from "../types/listing.js";

export async function getListings(): Promise<Listing[]> {
    // Doesn't need a dedicated client
    const result = await pool.query(`
        SELECT
        id,
        event_name,
        venue_name,
        event_date,
        section,
        num_seats,
        price_per_seat,
        created_at
        FROM listings
        ORDER BY event_date ASC
    `);

    return result.rows;
}

export async function updateSingleListing(listingId: string, newPrice: number): Promise<Listing> {
    // Needs dedicated client. Transaction w/ row locking
    const client = await pool.connect()

    try {
        await client.query('BEGIN')

        // Check if exists. Lock row for updating.
        const existingResults = await client.query(`
            SELECT * FROM listings
            WHERE id = $1
            FOR UPDATE
        `, [listingId])

        const existingListing = existingResults.rows[0]

        if (!existingListing) {
            throw new Error(`Listing ${listingId} not found`)
        }

        const oldPrice = existingListing.price_per_seat

        // Update price
        await client.query(`
            UPDATE listings
            SET price_per_seat = $1
            WHERE id = $2
        `, [newPrice, listingId])

        // Insert Price History with change
        await client.query(`
            INSERT INTO price_history (
                listing_id,
                old_price_per_seat,
                new_price_per_seat
            ) VALUES ($1, $2, $3)
        `, [listingId, oldPrice, newPrice])

        await client.query('COMMIT')

        // Retrieve updated listing.
        const updated = await client.query(`
            SELECT * FROM listings
            WHERE id = $1
            FOR UPDATE
        `, [listingId])

        return updated.rows[0]

    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}