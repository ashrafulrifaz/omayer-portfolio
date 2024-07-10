
const Navbar = () => {
    return (
        <div className="header flex justify-between items-center">
            <h1 className="font-manrope font-medium text-4xl">Ehasanul Islam</h1>
            <div>
                <div class="nav-items">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <button class="book-call">Book a Call</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;