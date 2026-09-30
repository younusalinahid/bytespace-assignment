import { Search } from "lucide-react";
import heroPerson from "../assets/hero-person.png";
import heroRingWhite from "../assets/hero-spiral-lime.png";
import heroSwirlWhite from "../assets/hero-ring-white.png";
import heroCone from "../assets/hero-cone.png";
import heroSpiralLime from "../assets/Frame.png";

export default function Hero() {
    return (
        <div className="relative mx-auto h-[1024px] w-[1440px] max-w-full overflow-hidden">
            <img
                src={heroSpiralLime}
                alt=""
                className="absolute z-0"
                style={{ top: "221px", left: "-50", width: "385px", height: "385px" }}
            />
            <img
                src={heroRingWhite}
                alt=""
                className="absolute z-0"
                style={{
                    top: "477px",
                    left: "183px",
                    width: "175px",
                    height: "175px",
                    transform: "rotate(-180deg)",
                }}
            />
            <img
                src={heroCone}
                alt=""
                className="absolute z-0"
                style={{ top: "464px", left: "1106px", width: "188px", height: "188px" }}
            />
            <img
                src={heroSwirlWhite}
                alt=""
                className="absolute z-0"
                style={{ top: "672px", left: "1127px", width: "330px", height: "330px" }}
            />

            <div
                className="absolute z-[1] rounded-full border-[#cbfc01]"
                style={{
                    top: "582px",
                    left: "145px",
                    width: "1149px",
                    height: "1149px",
                    borderWidth: "320px",
                    boxSizing: "border-box",
                }}
            />

            <div className="relative z-10 mx-auto flex flex-col items-center gap-8 pt-24 text-center">
                <div className="flex w-[935px] max-w-full flex-col gap-8">
                    <h1 className="font-heading text-7xl font-semibold text-white">
                        Get Access to Hundreds Courses Available
                    </h1>
                    <p className="text-lg text-white/90">
                        Unlock your creativity, gain valuable knowledge, and grow your
                        business with our wide range of courses.
                    </p>
                </div>

                <div className="flex h-[52px] w-[581px] max-w-full items-center gap-4 rounded-full bg-white pl-5 pr-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Course, topic, creator"
                        className="flex-1 text-sm text-gray-700 outline-none"
                    />
                    <button className="h-full rounded-full bg-electric-lime px-6 text-sm font-semibold text-gray-900">
                        Search
                    </button>
                </div>
            </div>

            <img
                src={heroPerson}
                alt="Student with laptop"
                className="absolute z-10"
                style={{
                    top: "512px",
                    left: "431px",
                    width: "578px",
                    height: "541px",
                    filter: `
            drop-shadow(0.52px 0.74px 3.04px #0000000A)
            drop-shadow(2.23px 3.19px 5.72px #0000000F)
            drop-shadow(5.38px 7.69px 9.57px #00000012)
            drop-shadow(10.21px 14.58px 16.09px #00000014)
            drop-shadow(16.95px 24.21px 24px #00000017)
            drop-shadow(25.84px 36.91px 36px #0000001A)
            drop-shadow(37.12px 53.03px 56px #0000001B)
            drop-shadow(51.04px 72.91px 72px #00000021)
          `,
                }}
            />

            <div
                className="absolute z-20 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg"
                style={{ top: "639px", left: "404px", width: "208px", height: "70px" }}
            >
        <span
            className="font-satoshi text-gray-900"
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "120%" }}
        >
          UI/UX Design
        </span>
                <span className="text-xs text-gray-500">200 Courses • 1000+ Students</span>
            </div>

            <div
                className="absolute z-20 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg"
                style={{ top: "651px", left: "842px", width: "232px", height: "131px" }}
            >
                <span className="text-sm text-gray-500">Learning Progress</span>
                <span className="font-heading text-3xl font-bold text-gray-900">55%</span>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[55%] rounded-full bg-electric-lime" />
                </div>
            </div>

            <div
                className="absolute z-20 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg"
                style={{ top: "837px", left: "328px", width: "258px", height: "121px" }}
            >
                <span className="text-sm text-gray-500">Happy Students</span>
                <span className="text-sm font-semibold text-gray-900">4.5 (240) ★</span>
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"
                            />
                        ))}
                    </div>
                    <span className="ml-2 rounded-full bg-electric-lime px-2 py-0.5 text-xs font-semibold text-gray-900">
            2k+
          </span>
                </div>
            </div>
        </div>
    );
}