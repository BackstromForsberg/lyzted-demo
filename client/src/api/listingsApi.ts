import type { Listing } from "../types/listing"

const API_BASE_URL = import.meta.env.VITE_API_URL || 'NOT_SET'
const HEADERS = {
    "Content-Type": "application/json",
}

export async function listListings(): Promise<Listing[]> {
    const res = await fetch(`${API_BASE_URL}/listings`,
        {
            method: "GET",
            headers: HEADERS,
        }
    )

    if (!res.ok) {
        throw new Error("Failed to get listings")
    }

    return res.json()
}

export async function updateListingPrice(
    listingId: number,
    pricePerSeat: number
) {

    const res = await fetch(
        `${API_BASE_URL}/listings/${listingId}/price`,
        {
            method: "PATCH",
            headers: HEADERS,
            body: JSON.stringify({ price_per_seat: pricePerSeat }),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to update listing price")
    }

    return res.json()
}