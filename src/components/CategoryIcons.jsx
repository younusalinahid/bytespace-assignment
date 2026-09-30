import { Palette, Code2, Laptop, Building2, Megaphone, Camera } from "lucide-react";

const categories = [
    { icon: Palette, label: "Design" },
    { icon: Code2, label: "Development" },
    { icon: Laptop, label: "IT & Software" },
    { icon: Building2, label: "Business" },
    { icon: Megaphone, label: "Marketing" },
    { icon: Camera, label: "Photography" },
];

export default function CategoryIcons() {
    return (
        <div className="mx-auto flex flex-col items-center gap-8 bg-white pb-24 pt-8 text-center">
            <div className="flex w-[900px] max-w-full flex-col gap-4">
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                    Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className="text-gray-500">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>
            </div>

            <div className="flex w-[1202px] max-w-full items-center justify-center gap-10 rounded-2xl border border-gray-100 p-8">
                {categories.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-lime">
                            <Icon size={22} className="text-gray-900" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}