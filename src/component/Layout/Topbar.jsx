import logo from "../../assets/logo.png"
import amtlogo from "../../assets/amt.png"

export default function Topbar({ onMenuClick }) {
    return (
        <header className="h-[70px] w-full pt-[-3] mb-[10px] sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 bg-white">
            <button onClick={onMenuClick} className="md:hidden p-2 -ml-2">
                ☰
            </button>

            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-14 h-14" />
                <img src={amtlogo} alt="company-logo" className="w-[163px]" />
            </div>

            <div className="flex items-center gap-2">
                <div className="flex flex-col ">
                    <span className="text-sm text-gray-600">Liam Michael</span>
                    <span className="text-[#28643B80] font-medium text-[12px] text-end">Admin</span>
                </div>
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-9 h-9 rounded-full"
                />
            </div>
        </header>
    );
}
