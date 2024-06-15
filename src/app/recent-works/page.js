import Link from "next/link";

const page = () => {
    return (
        <div className="max-w-[1300px] mx-auto p-12">
            <div className="flex items-center gap-5 justify-between">
                <h2 className="text-3xl font-bold leading-snug">Some Masterpieces</h2>
                <div className="flex gap-6">
                    <Link href="/" className="back_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#D4BAF9" fill="none">
                            <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    <button className="py-2 px-5 rounded-xl bg-primary text-lg font-semibold ">Let{"'"}s Talk</button>            
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-10">
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="w-full h-auto rounded-xl" src="https://www.youtube.com/embed/PvDAoCiP9hc?si=aQ2d8b26kzZp-ZsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default page;