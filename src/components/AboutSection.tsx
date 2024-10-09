/**
 * About section
 * @returns AboutSection component
 */
export default function AboutSection() {
    return (
        <section className="w-full text-lime-900">
            <h1 className="font-bold">About Me</h1>
            <br />
            <p>
                Hi! My name is Alyssa, and I recently graduated from the
                University of Illinois at Urbana-Champaign with a B.S. in
                Mathematics and Computer Science. I'm passionate about both the
                technical and creative sides of development. TODO
            </p>
            <br />
            <p>
                In my spare time, I participate in game jams, where I create
                small games in a short time span (usually 48-72 hours) under
                specified restrictions. I use these tight constraints to be
                creative and try out new concepts. If you're curious, you can
                check out my games{" "}
                <a
                    className="underline hover:text-lime-500"
                    href="https://axodan.itch.io/"
                    target="_blank"
                >
                    here
                </a>
                . When I'm not at my computer, I enjoy dancing and learning
                different musical instruments!
            </p>
        </section>
    );
}
