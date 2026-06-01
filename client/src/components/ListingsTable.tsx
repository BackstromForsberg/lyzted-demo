import type { Listing } from "../types/listing"
import { listingCols } from "./listingCols"
import ListingRow from "./ListingRow"

interface Props {
    listings: Listing[]
    onPriceChange: (listingId: number, newPrice: number) => Promise<void>
}
const ListingsTable = ({ listings, onPriceChange }: Props) => {

    return (
        <div className="overflow-hidden">
            <h2 className='text-3xl mb-5 text-indigo-950'>Listings</h2>
            <div className='rounded-lg overflow-hidden'>
                <table className="min-w-full divide-y divide-gray-300 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            {listingCols.map((c) => (
                                <th
                                    key={c.key}
                                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-900"
                                >
                                    {c.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {listings.map((listing) => (
                            <ListingRow key={listing.id} listing={listing} onPriceChange={onPriceChange} />
                        ))}

                        {listings.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-4 py-8 text-center text-sm text-gray-500"
                                >
                                    No listings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListingsTable