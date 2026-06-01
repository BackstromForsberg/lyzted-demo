import { useCallback, useEffect, useState } from 'react'
import { listListings, updateListingPrice } from '../api/listingsApi';
import type { Listing } from '../types/listing';
import ListingsTable from './ListingsTable';

const ListingsPage = () => {

    const [listings, setListings] = useState<Listing[]>([])

    const handlePriceChange = useCallback(
        async (listingId: number, newPrice: number) => {
            const updatedListing = await updateListingPrice(listingId, newPrice)

            setListings((prev) =>
                prev.map((listing =>
                    listing.id == listingId ? updatedListing : listing
                ))
            )
            alert(`Updated listing: ${listingId} to ${newPrice} successfully`)
        }, []
    )

    const getData = async () => {
        const data = await listListings()
        setListings(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ListingsTable listings={listings} onPriceChange={handlePriceChange} />
    )
}

export default ListingsPage