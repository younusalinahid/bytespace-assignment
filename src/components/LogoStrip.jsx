import { Waves, Sun, Zap, Target, CircleDot } from "lucide-react";

const logos = [
    { icon: Waves, name: "Logoipsum" },
    { icon: Sun, name: "Logoipsum" },
    { icon: Zap, name: "Logoipsum" },
    { icon: Target, name: "Logoipsum" },
    { icon: CircleDot, name: "Logoipsum" },
];

export default function LogoStrip() {
    return (
        <div className="flex h-[202px] w-full items-center justify-center bg-gray-50">
            <div className="mx-auto flex w-[1440px] max-w-full items-center justify-between px-24">
                {logos.map(({ icon: Icon, name }, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                        <Icon size={22} strokeWidth={1.75} />
                        <span className="text-lg font-medium">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}