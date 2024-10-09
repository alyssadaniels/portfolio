import { IoSend } from "react-icons/io5";

/**
 * Component for contact section
 * @returns ContactSection component
 */
export default function ContactSection() {
    return (
        <section className="w-full text-lime-900">
            <h1 className="font-bold text-lime-900">Contact</h1>
            <br />
            <form
                className="mx-auto flex flex-col py-6 px-8 shadow rounded bg-gray-200 max-w-96"
                action="https://api.web3forms.com/submit"
                method="POST"
            >
                <input
                    type="hidden"
                    name="access_key"
                    value={import.meta.env.VITE_WEB3FORMS_API_KEY}
                />
                <label htmlFor="name">Name</label>
                <input
                    required
                    className="rounded p-1 bg-gray-50"
                    name="name"
                    id="name"
                />
                <br />
                <label htmlFor="email">E-mail</label>
                <input
                    required
                    className="rounded p-1 bg-gray-50"
                    name="email"
                    id="email"
                />
                <br />
                <label htmlFor="message">Message</label>
                <textarea
                    required
                    className="rounded p-1 bg-gray-50"
                    name="message"
                    id="message"
                />
                <br />
                <button
                    className="flex items-center gap-2 bg-lime-900 text-gray-50 w-fit mx-auto px-4 py-1 rounded"
                    type="submit"
                >
                    Send <IoSend />
                </button>
            </form>
        </section>
    );
}
