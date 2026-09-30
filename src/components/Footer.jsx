import logoIcon from "../assets/logo-icon.png";

const linkColumns = [
    {
        title: "Featured Courses",
        links: ["Development", "Marketing", "Business", "Photography", "Finance"],
    },
    {
        title: "Featured Categories",
        links: ["IT", "Design", "Sport"],
    },
    {
        title: "Company",
        links: ["Become a Creator", "Affiliate Program", "Contact", "Hire", "About"],
    },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 bg-white py-16">
            <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 px-4">
                <div className="flex flex-wrap items-start justify-between gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <img src={logoIcon} alt="ByteSpace" className="h-7 w-auto" />
                            <span className="font-heading text-lg font-bold text-gray-900">
                ByteSpace
              </span>
                        </div>
                        <p className="max-w-xs text-sm text-gray-500">
                            Stay up to date with our latest features and offerings by
                            joining our newsletter.
                        </p>
                        <div className="flex h-11 max-w-xs items-center gap-2 rounded-full border border-gray-200 pl-4 pr-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 text-sm outline-none"
                            />
                            <button className="rounded-full bg-electric-lime px-4 py-2 text-xs font-semibold text-gray-900">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* link columns */}
                    {linkColumns.map((col) => (
                        <div key={col.title} className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-gray-900">
                {col.title}
              </span>
                            {col.links.map((link) => (
                                <a key={link} href="#" className="text-sm text-gray-500">
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
                    <span>© 2025 ByteSpace. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}