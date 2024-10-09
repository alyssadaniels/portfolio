/**
 * Navigation
 * @returns NavBar component
 */
export default function NavBar() {
    return (
        <nav className="sticky top-0 w-screen flex items-center py-2 min-h-12 text-gray-50 bg-lime-900 border-b-2 text-sm md:text-md">
            <ul className="flex justify-evenly items-center w-full">
                <li>
                    <a href="#top" className="font-bold">
                        Alyssa Daniels
                    </a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#projects">Featured Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
