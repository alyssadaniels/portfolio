import ExternalLink from "./ExternalLink";

/**
 * Footer
 * @returns Footer component
 */
export default function Footer() {
    return (
        <footer className="flex justify-center w-screen text-center text-lime-900 py-8">
            <ExternalLink text="View source code for this site" url="" />
        </footer>
    );
}
