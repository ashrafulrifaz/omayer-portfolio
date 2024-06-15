import Link from "next/link";

const notFound = () => {
    return (
        <div className="bg-[#FFFAFA] flex items-center h-screen justify-center">
            <div>
                <h2 className="text-5xl font-semibold">This page is under maintainance</h2>
                <div className="flex justify-center">
                    <Link href="/" className="py-2 px-5 rounded-xl bg-primary text-lg font-semibold mt-8">Back to Home</Link> 
                </div> 
            </div>
        </div>
    );
};

export default notFound;