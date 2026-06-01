import { useState } from "react";

type PriceCellProps = {
    listingId: number;
    currentPrice: number;
    onSave: (
        listingId: number,
        newPrice: number
    ) => void | Promise<void>;
};

export default function PriceCell({
    listingId,
    currentPrice,
    onSave,
}: PriceCellProps) {
    const [newPrice, setNewPrice] = useState(currentPrice);

    return (
        <td className="px-4 py-4 text-right">
            <div className="flex justify-end gap-2">
                <input
                    type="number"
                    step="1"
                    value={newPrice}
                    onChange={(e) =>
                        setNewPrice(Number(e.target.value))
                    }
                    className="w-24 rounded border border-gray-300 px-2 py-1 text-right"
                />

                <button
                    type="button"
                    onClick={() =>
                        onSave(listingId, newPrice)
                    }
                    className="rounded bg-green-600 px-2 py-1 text-white"
                >
                    ✓
                </button>
            </div>
        </td>
    );
}