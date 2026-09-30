import { Star } from "lucide-react";

export default function CourseCard({ image, title, hours, comments, level, price }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">            <div className="relative h-[220px] w-full">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2 text-xs text-white">
                    <span className="rounded-md bg-black/50 px-2 py-1">17 Lessons</span>
                    <span className="rounded-md bg-black/50 px-2 py-1">{hours}</span>
                    <span className="rounded-md bg-black/50 px-2 py-1">{comments} Comments</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-start justify-between">
                    <h3 className="font-heading text-lg font-semibold text-gray-900">{title}</h3>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
            4.5 <Star size={14} fill="currentColor" />
          </span>
                </div>
                <span className="text-sm text-gray-400">by purepearl studio</span>

                <div className="flex items-center justify-between pt-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {level}
          </span>
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-300" />
                        ))}
                        <span className="ml-1 flex h-6 items-center rounded-full bg-electric-lime px-2 text-xs font-semibold text-gray-900">
              26+
            </span>
                    </div>
                </div>

                <span className="pt-1 font-semibold text-blue-600">
          ${price}
                    <span className="text-sm font-normal text-gray-400"> /lifetime</span>
        </span>
            </div>
        </div>
    );
}