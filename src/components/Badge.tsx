/**
 * Styled badge
 * @param text to render
 * @param color of background (in tailwind form, ex. bg-amber-50)
 * @returns Badge component
 */
export default function Badge(props: { text: string; color: string }) {
    return (
        <div
            className={
                "text-xs text-gray-50 px-3 p-0.5 rounded-full bg-opacity-70 " +
                props.color
            }
        >
            {props.text}
        </div>
    );
}
