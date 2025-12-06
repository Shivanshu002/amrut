import { useState } from "react";
import { products as initialProducts } from "../utils/products";
import prd from '../assets/icons/link.png';
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Products() {
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState(initialProducts);
    const [menuOpen, setMenuOpen] = useState(false);

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const toggleStatus = () => {
        if (!selectedProduct) return;
        const updated = products.map((p) =>
            p.id === selectedProduct.id
                ? { ...p, status: p.status === "Active" ? "Inactive" : "Active" }
                : p
        );

        setProducts(updated);
        setSelectedProduct({
            ...selectedProduct,
            status: selectedProduct.status === "Active" ? "Inactive" : "Active",
        });
        setMenuOpen(false);
    };

    return (
        <>
            <h2 className="text-[18px] font-semibold mb-5 mt-1">Products</h2>

            <div className="mb-2">
                {selectedProduct ? (
                    <div className="bg-white p-6 rounded-2xl border border-[#E7E9EC] shadow-sm">

                        <div className="flex justify-between items-center">
                            <h3 className="text-[14px] font-semibold mb-4">
                                Product Details
                            </h3>

                            <div className="relative flex justify-end">
                                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)} >
                                    <BsThreeDotsVertical size={20} />
                                </button>

                                {menuOpen && (
                                    <div className="absolute top-8 right-2 bg-white shadow-lg border rounded-lg w-[140px] text-sm z-50">

                                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600" onClick={() => alert("Edit coming soon")}>
                                            Edit
                                        </button>
                                        <div className="border-t"></div>
                                        <button
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                            onClick={toggleStatus}
                                        >
                                            {selectedProduct.status === "Active" ? "Inactive" : "Activate"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-12 h-12 rounded-xl object-cover"
                            />

                            <div>
                                <p className="font-medium text-[#3C3D40]">{selectedProduct.name}</p>
                                <p className="text-[12px] text-gray-500">
                                    Status:{" "}
                                    <span className="text-[#30D77D] font-semibold">
                                        {selectedProduct.status}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="text-[13px] text-gray-600 leading-5 mb-4">
                            {selectedProduct.description}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

            <div className="flex gap-6">
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between px-2 mb-5">
                        <div className="flex items-center gap-4">
                            <h3 className="text-[14px] font-semibold">Products List</h3>

                            <div className="flex items-center bg-[#F2F4F6] px-3 py-1 rounded-[11px] h-[37px] border border-[#E7E9EC] w-[220px]">
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="text-sm outline-none bg-transparent w-full placeholder:text-gray-400"
                                />
                            </div>

                            <button className="flex items-center justify-center w-7 h-7 rounded-md bg-[#E7F6EF] text-[#30D77D] text-lg">
                                +
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="w-9 h-9 flex items-center justify-center text-gray-500">
                                <img src={prd} alt="download" />
                            </button>

                            <button className="w-9 h-9 rounded-[15px] bg-gray-100 flex items-center justify-center text-gray-500">
                                ⇅
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-[#E7E9EC]">
                        <table className="w-full text-[14px]">
                            <thead className="bg-[#F8F9FA] text-gray-500 text-[11px] uppercase">
                                <tr>
                                    <th className="py-3 px-6 text-left">Products</th>
                                    <th className="py-3 px-2 text-left">Description</th>
                                    <th className="py-3 px-6 text-right">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredProducts.map((p, i) => (
                                    <tr
                                        key={i}
                                        onClick={() => setSelectedProduct(p)}
                                        className="cursor-pointer hover:bg-[#F8F9FA]/60"
                                    >
                                        <td className="py-3 px-6 flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="productSelect"
                                                checked={selectedProduct?.id === p.id}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProduct(p);
                                                }}
                                                className="w-3 h-3 cursor-pointer"
                                            />

                                            <img
                                                src={p.image}
                                                alt=""
                                                className="w-9 h-9 rounded-full object-cover"
                                            />
                                            <span className="font-medium text-[#3C3D40]">
                                                {p.name}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-gray-500 text-[13px]">
                                            {p.description}
                                        </td>
                                        <td className="py-3 px-6 text-right">
                                            <span
                                                className={`font-semibold text-[13px] ${p.status === "Active" ? "text-[#30D77D]" : "text-red-500"
                                                    }`}
                                            >
                                                {p.status}
                                            </span>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
