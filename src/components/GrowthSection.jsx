import { Check } from "lucide-react";
import heroPerson from "../assets/hero-person.png";
import creatorPerson from "../assets/creator-person.png";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function GrowthSection() {
    return (
        <div
            className="w-full py-20"
            style={{
                background: "linear-gradient(135deg, #f4ffd6 0%, #f3f0ff 100%)",
            }}
        >
            {/* --- Your Path to Professional Growth --- */}
            <div className="mx-auto flex w-[1200px] max-w-full items-center gap-16 px-4">
                <div className="flex w-1/2 flex-col gap-6">
                    <h2 className="font-heading text-4xl font-bold text-gray-900">
                        Your Path to Professional Growth Starts Here!
                    </h2>
                    <p className="text-gray-600">
                        Explore our curated selection of courses tailored to enhance your
                        capabilities and accelerate your career journey. Whether you are
                        looking to sharpen specific skills, gain industry expertise, or
                        embark on a new career path entirely, we have the resources you
                        need.
                    </p>

                    <div className="flex gap-10 pt-4">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col">
                <span className="font-heading text-3xl font-bold text-blue-700">
                  {s.value}
                </span>
                                <span className="text-sm text-gray-500">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-1/2">
                    <img
                        src={heroPerson}
                        alt="Student learning"
                        className="w-[400px] max-w-full"
                    />
                    <div className="absolute bottom-6 right-0 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg">
                        <span className="text-sm text-gray-500">Learning Progress</span>
                        <span className="font-heading text-2xl font-bold text-gray-900">
              55%
            </span>
                        <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-[55%] rounded-full bg-electric-lime" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 flex w-[1200px] max-w-full items-center gap-16 px-16 py-16">
                <div className="relative w-1/2" style={{ height: "620px" }}>
                    {/* cards behind the person image */}
                    <div
                        className="absolute z-0 flex flex-col gap-2 rounded-2xl bg-persian-blue"
                        style={{ top: "44px", left: "0px", width: "232px", height: "119px", padding: "16px" }}
                    >
                        <span className="text-xs text-white/70">Total Revenue</span>
                        <span className="font-heading text-lg font-bold text-white">$120.29</span>
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/20">
                            <div className="h-full w-[70%] rounded-full bg-electric-lime" />
                        </div>
                    </div>

                    <div
                        className="absolute z-0 flex flex-col gap-2 rounded-2xl bg-persian-blue"
                        style={{ top: "194px", left: "0px", width: "134px", height: "135px", padding: "16px" }}
                    >
                        <span className="text-xs text-white/70">Year to Date</span>
                        <span className="font-heading text-lg font-bold text-white">$1,200.38</span>
                    </div>

                    <img
                        src={creatorPerson}
                        alt="Creator managing courses"
                        className="absolute z-10 rounded-2xl object-cover"
                        style={{ top: "0px", left: "28px", width: "435px", height: "596px" }}
                    />

                    <div className="absolute bottom-6 z-20 flex items-center gap-2 rounded-xl bg-white p-3 shadow-lg" style={{ left: "280px" }}>
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gray-300" />
                            ))}
                        </div>
                        <span className="text-xs font-medium text-gray-700">Happy Students</span>
                    </div>
                </div>

                <div className="flex w-1/2 flex-col gap-4">
                    <h2 className="font-heading text-3xl font-bold text-gray-900">
                        Create &amp; Manage Courses Easily.
                    </h2>
                    <p className="text-gray-500">
                        ByteSpace supports individuals or entities in the creation,
                        publication, and administration of educational courses.
                    </p>

                    <ul className="flex flex-col gap-3 pt-2">
                        {features.map((f) => (
                            <li key={f} className="flex items-center gap-3 text-gray-800">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-lime">
            <Check size={14} className="text-gray-900" />
          </span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}