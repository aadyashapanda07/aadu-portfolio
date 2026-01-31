import { profile } from "../data";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
}
