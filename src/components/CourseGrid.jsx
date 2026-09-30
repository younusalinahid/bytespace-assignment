import CourseCard from "./CourseCard";

const courses = [
    { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400", title: "Learn Figma from Basic", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
    { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400", title: "Build Digital Asset", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
    { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", title: "the Power of Big Data", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
    { image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400", title: "Balancing Productivity and Life", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
    { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400", title: "Mastering Money Management", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
    { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400", title: "From Idea to Startup Success", hours: "2 hours 16 mins", comments: 59, level: "Beginner", price: 25 },
];

export default function CourseGrid() {
    return (
        <div className="w-full bg-white py-16">
            <div className="mx-auto grid w-[1199px] max-w-full grid-cols-3 gap-10">
                {courses.map((c, i) => (
                    <CourseCard key={i} {...c} />
                ))}
            </div>
        </div>
    );
}