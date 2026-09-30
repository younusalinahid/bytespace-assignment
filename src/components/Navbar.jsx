import { ShoppingBag } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-24 py-8 text-white">
            <div className="flex items-center gap-2">
                <img src={logoIcon} alt="ByteSpace" className="h-8 w-auto" />
                <span className="font-heading text-xl font-bold">ByteSpace</span>
            </div>

            <ul className="flex gap-8 text-sm">
                <li className="font-medium">Home</li>
                <li className="opacity-80">Courses</li>
                <li className="opacity-80">Creators</li>
            </ul>

            <div className="flex items-center gap-6 text-sm">
                <Link to="/login">Sign In</Link>
                <Link to="/register">Join Us</Link>
                <ShoppingBag size={18} />
            </div>
        </nav>
    );
}