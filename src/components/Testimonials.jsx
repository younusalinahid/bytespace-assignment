const testimonials = [
    {
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "https://i.pravatar.cc/150?img=47",
        quote:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "https://i.pravatar.cc/150?img=12",
        quote:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "https://i.pravatar.cc/150?img=33",
        quote:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
];

export default function Testimonials() {
    return (
        <div
            className="w-full py-20"
            style={{
                background: "linear-gradient(135deg, #f4ffd6 0%, #f3f0ff 100%)",
            }}
        >
            <div className="mx-auto flex w-[1200px] max-w-full items-start justify-between gap-16 px-4">
                <h2 className="w-[350px] font-heading text-3xl font-bold text-gray-900">
                    Discover What Our Community Is Saying
                </h2>
                <p className="w-[500px] text-gray-500">
                    At ByteSpace, our vibrant community of learners and creators is at
                    the heart of what we do. Hear directly from those who have
                    experienced the transformative journey of learning and creating on
                    our platform. Explore testimonials that reflect the diverse
                    perspectives of enthusiastic learners and accomplished creators.
                </p>
            </div>

            <div className="mx-auto mt-12 flex w-[1204px] max-w-full justify-center gap-[41px] px-4">                {testimonials.map((t) => (
                    <div
                        key={t.name}
                        className="flex flex-col bg-white"
                        style={{
                            width: "374px",
                            height: "432px",
                            gap: "24px",
                            borderRadius: "24px",
                            padding: "24px",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900">{t.name}</span>
                                <span className="text-xs text-blue-600">{t.role}</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">"{t.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}