/**
 * Link to open in new tab
 * @param url
 * @param text to render
 * @returns ExternalLink component
 */
export default function ExternalLink(props: { url: string; text: string }) {
    return (
        <a
            href={props.url}
            target="_blank"
            className="inline flex gap-2 items-center w-fit underline hover:text-lime-500"
        >
            {props.text}
        </a>
    );
}
