import Footer from "../Footer/Footer";

const Contact = () => {
    return (
        <div className="contact">
            <div className="pt-10 pb-5 max-w-[1200px] mx-auto text-center">
                <h3 className="text-2xl font-semibold text-center">Contact with me</h3>
                <form action="" className="mt-8 space-y-6 w-1/2 mx-auto">
                    <input type="text" placeholder="Enter your name here" />
                    <input type="email" placeholder="Enter your email here" />
                    <input type="text" placeholder="Enter your subject here" />
                    <textarea rows={4} type="text" placeholder="Enter your message here" />
                    <button>Send Message</button>
                </form>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;