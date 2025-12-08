export default function ImageUpload({ images, index, prev, next, removeImageAt, handleBrowse, fileInputRef, handleDrop, handleDragOver, handleFileChange }) {
    return (
        <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 block mb-3">
                Product Image <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-12 gap-4 items-stretch">
                {/* carousel */}
                <div className="col-span-9 border rounded-lg p-3 flex flex-col">
                    <div className="flex items-center justify-between">
                        <button onClick={prev} disabled={images.length === 0} className="w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center disabled:opacity-40">‹</button>

                        <div className="flex-1 mx-4 overflow-hidden">
                            <div className="flex gap-3 items-center">
                                {images.length ? (
                                    images.map((img, i) => (
                                        <div key={i} className={`w-36 h-28 rounded overflow-hidden flex-shrink-0 ${i === index ? "ring-2 ring-[#DDEEE0]" : ""}`}>
                                            <img src={img.url} alt={i} className="w-full h-full object-cover" />
                                        </div>
                                    ))
                                ) : (
                                    [0, 1, 2].map((i) => (
                                        <div key={i} className="w-36 h-28 rounded bg-gray-50 border border-[#f0f0f0]" />
                                    ))
                                )}
                            </div>
                        </div>

                        <button onClick={next} disabled={images.length === 0} className="w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center disabled:opacity-40">›</button>
                    </div>

                    <div className="flex justify-center items-center mt-3">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full mx-1 ${i === index ? "bg-gray-700" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* uploader */}
                <div
                    className="col-span-3 border-dashed border-2 border-[#DDEEE0] rounded-lg flex flex-col justify-center items-center p-5 cursor-pointer"
                    onClick={handleBrowse}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <button onClick={handleBrowse} className="bg-[#2F7A4E] text-white px-4 py-2 rounded text-sm">Browse</button>
                    <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
                </div>
            </div>
        </div>
    );
}
