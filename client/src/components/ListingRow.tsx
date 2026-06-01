import { memo } from 'react'
import type { Listing } from "../types/listing"
import PriceCell from "./PriceCell"

interface Props {
    listing: Listing
    onPriceChange: (listingId: number, newPrice: number) => Promise<void>
}

const ListingRow = ({ listing, onPriceChange }: Props) => {

    console.log(`Rendered new row for ${listing.id}.`)

    return (
        <tr
            className="hover:bg-gray-50 transition-colors"
        >
            <td className="px-4 py-4 text-md text-gray-900">{listing.event_name}</td>
            <td className="px-4 py-4 text-sm text-gray-600">{listing.venue_name}</td>
            <td className="px-4 py-4 text-sm text-gray-600">{new Date(listing.event_date).toLocaleDateString()}</td>
            <td className="px-4 py-4 text-sm text-gray-600">{listing.section}</td>
            <td className="px-4 py-4 text-sm text-gray-600">{listing.num_seats}</td>
            <PriceCell listingId={listing.id} currentPrice={listing.price_per_seat} onSave={onPriceChange} />
        </tr>
    )
}

export default memo(ListingRow)