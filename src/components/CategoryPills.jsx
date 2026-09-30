const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
];

export default function CategoryPills() {
    return (
        <div className="mx-auto flex flex-col items-center gap-16 bg-white pt-24 text-center">
            {/* heading block: 917 wide, gap 16 */}
            <div className="flex w-[917px] max-w-full flex-col gap-4">
                <h2
                    className="font-heading text-gray-900"
                    style={{
                        fontWeight: 600,
                        fontSize: "44px",
                        lineHeight: "120%",
                        letterSpacing: "-1%",
                    }}
                >                    Discover Your Passion, Build Your Skills
                </h2>
                <p className="text-gray-500">
                    At Bytespace Courses, we bring you closer to life-changing
                    knowledge. Explore a variety of courses across different fields,
                    from technology to the arts, and make a difference in your career
                    and life.
                </p>
            </div>

            {/* category pills: centered, wraps into rows */}
            <div className="flex w-[1086px] max-w-full flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={
                            cat === "Featured"
                                ? "rounded-full bg-electric-lime px-5 py-2 text-sm font-semibold text-gray-900"
                                : "rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700"
                        }
                    >
                        {cat}
                    </button>
                ))}
                <button className="px-5 py-2 text-sm font-medium text-blue-600">
                    + More
                </button>
            </div>
        </div>
    );
}