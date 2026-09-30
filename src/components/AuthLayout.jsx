import logoIcon from "../assets/logo-icon.png";
import heroCone from "../assets/hero-cone.png";
import heroRingWhite from "../assets/hero-ring-white.png";
import avatarGroup from "../assets/Avatar-group.png";
import courseCard1 from "../assets/Course_Card_1.png";
import courseCard2 from "../assets/Course_Card_2.png";

export default function AuthLayout({ heading, subtitle, children }) {
    return (
        <div className="flex min-h-screen w-full bg-persian-blue">
            <div className="hidden w-1/2 items-center justify-center lg:flex">
                <div className="relative h-[820px] w-[560px] max-w-full">
                    <img src={logoIcon} alt="ByteSpace" className="h-8 w-auto" />

                    <div className="mt-10 flex max-w-sm flex-col gap-3">
                        <h2 className="text-2xl font-bold text-white">{heading}</h2>
                        <p className="text-sm text-white/80">{subtitle}</p>
                    </div>

                    <img
                        src={heroRingWhite}
                        alt=""
                        className="absolute z-10 w-14"
                        style={{ top: "260px", left: "60px" }}
                    />
                    <img
                        src={heroCone}
                        alt=""
                        className="absolute z-0 w-24"
                        style={{ top: "660px", left: "0px" }}
                    />

                    <img
                        src={courseCard2}
                        alt="Build Digital Asset"
                        className="absolute z-10 rounded-2xl shadow-xl"
                        style={{ top: "280px", left: "0px", width: "300px", height: "310px" }}
                    />

                    <img
                        src={courseCard1}
                        alt="the Power of Big Data"
                        className="absolute z-20 rounded-2xl shadow-xl"
                        style={{ top: "210px", left: "90px", width: "300px", height: "310px" }}
                    />

                    <div
                        className="absolute z-30 flex flex-col gap-2 rounded-2xl p-4 shadow-xl"
                        style={{
                            top: "560px",
                            left: "200px",
                            width: "258px",
                            height: "123px",
                            background: "#D4FB20",
                        }}
                    >
                        <span className="text-sm text-gray-800">Happy Students</span>
                        <span className="text-sm font-semibold text-gray-900">4.5 (240) ★</span>
                        <img src={avatarGroup} alt="Happy students" className="h-[43px] w-[232px]" />
                    </div>
                </div>
            </div>

            <div className="flex w-full items-center justify-center bg-white px-6 py-16 lg:w-1/2">
                <div className="w-full max-w-sm">{children}</div>
            </div>
        </div>
    );
}