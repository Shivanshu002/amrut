
 export default function Stepper() {
    const steps = ["General information", "Benefits", "Properties", "FAQ", "Overview"];
    return (
        <div className="flex justify-center mb-6">
            <div className="flex items-center gap-6">
                {steps.map((label, idx) => {
                    const step = idx + 1;
                    const active = step === 1;
                    return (
                        <div key={label} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${active
                                            ? "border-2 border-[#2F7A4E] text-[#2F7A4E]"
                                            : "border border-gray-300 text-gray-500 bg-white"
                                        }`}
                                >
                                    {String(step).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-gray-500 mt-2 text-center w-28">{label}</div>
                            </div>
                            {step < 5 && <div className="w-12 h-[2px] bg-gray-300 ml-3 mr-3" />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
