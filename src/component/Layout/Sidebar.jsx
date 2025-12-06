import { NavLink } from "react-router-dom";
import { MENU } from "../../utils/sidebarData";

export default function Sidebar({ open, onClose }) {
    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 md:hidden transition ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <aside
                className={`
    fixed left-0 top-20 
    w-[200px]  bg-white 
    rounded-tr-[16px] rounded-br-[16px]
    transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
            >
                <div className="p-6 font-bold text-[#81828D] text-[11px]">
                    Menu
                </div>

                <div className="overflow-y-auto h-[calc(100vh-64px)] pr-1">
                    <nav className="space-y-1">
                        {MENU.map(item => (
                            <NavLink
                                to={item.path}
                                key={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-6 py-2 text-sm transition 
            ${isActive
                                        ? "bg-gray-100 font-semibold text-black mr-2 rounded-tr-[10px] rounded-br-[10px]"
                                        : "text-gray-600"
                                    } 
            hover:bg-gray-100`
                                }
                                onClick={onClose}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-[27px] h-[27px] object-contain opacity-80"
                                />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>

        </>
    );
}
