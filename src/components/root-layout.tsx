import { Outlet } from "react-router";
import Navbar from "./navbar";

export default function RootLayout() {
    return (
        <div className="">
            <Navbar />
            <main className="w-full md:max-w-[80%] lg:max-w-[70%] mx-auto px-5 py-5">
                <Outlet />
            </main>
        </div>
    )
}
