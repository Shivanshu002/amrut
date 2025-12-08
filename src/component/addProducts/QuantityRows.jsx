export default function QuantityRows({ rows, removeRow }) {
    return (
        <div className="col-span-12 mt-3 flex items-center gap-4">
            {rows.map((r) => (
                <div key={r.id} className="flex items-center gap-3">
                    <div className="bg-[#E9F5EC] text-[#2F7A4E] px-4 py-2 rounded text-xs shadow-sm">{r.pillQty}</div>
                    <div className="bg-[#E9F5EC] text-[#2F7A4E] px-4 py-2 rounded text-xs shadow-sm">{r.pillMonth}</div>
                    <div className="bg-[#E9F5EC] text-[#2F7A4E] px-4 py-2 rounded text-xs shadow-sm">{r.pillPrice}</div>
                    <button onClick={() => removeRow(r.id)} className="text-gray-500 ml-2">×</button>
                </div>
            ))}
        </div>
    );
}
