import type { Request, Response } from "express";
import { getListings, updateSingleListing } from "../services/listingsService.js";
import type { Listing, UpdateListingBody, UpdateListingParams } from "../types/listing.js";

export async function listListings(
    _req: Request<unknown, Listing[]>,
    res: Response
): Promise<void> {
    const listings = await getListings();

    res.status(200).json(listings);
}

export async function updateListing(
    _req: Request<UpdateListingParams, Listing, UpdateListingBody>,
    res: Response
): Promise<void> {

    const id = _req.params.id;
    const { price_per_seat } = _req.body

    const updated = await updateSingleListing(id, price_per_seat)
    res.status(200).json(updated);
}