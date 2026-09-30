export default function CreatorCTA() {
    return (
        <div className="relative w-full overflow-hidden bg-persian-blue py-24">
            <div className="absolute -left-10 top-10 h-32 w-32 rounded-full border-[24px] border-electric-lime opacity-60" />
            <div className="absolute -right-10 bottom-10 h-40 w-40 rotate-45 bg-electric-lime opacity-20" />

            <div className="relative z-10 mx-auto flex w-[700px] max-w-full flex-col items-center gap-6 px-4 text-center">
                <h2 className="font-heading text-4xl font-bold text-white">
                    Unlock Your Potential as a Creator with ByteSpace
                </h2>
                <p className="text-white/80">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize
                    our Course Editor and showcase your expertise by publishing your
                    finest courses on the ByteSpace Course Library.
                </p>
                <button className="rounded-full bg-electric-lime px-8 py-3 text-sm font-semibold text-gray-900">
                    Join as Creator
                </button>
            </div>
        </div>
    );
}