import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f0f0f0] flex flex-col ">
            <Topbar onMenuClick={() => setOpen(true)} />
            <div className="flex flex-1 gap-2">
                <Sidebar open={open} onClose={() => setOpen(false)} />
                <main className="flex-1 px-3 overflow-auto ml-[200px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
