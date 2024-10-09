const COLOR_OPTIONS = [
    "bg-orange-400",
    "bg-lime-400",
    "bg-green-400",
    "bg-emerald-400",
    "bg-teal-400",
    "bg-sky-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
];

export default function getRandomBadgeColors(badgeNames: string[]): {
    [name: string]: string;
} {
    let colorMapping: { [name: string]: string } = {};
    let colorOptions: string[] = [...COLOR_OPTIONS];

    badgeNames.forEach((name) => {
        if (colorMapping[name] === undefined) {
            const colorIdx = Math.floor(Math.random() * colorOptions.length);

            colorMapping[name] = colorOptions[colorIdx];

            colorOptions.splice(colorIdx, 1);

            if (colorOptions.length === 0) {
                colorOptions = [...COLOR_OPTIONS];
            }
        }
    });

    return colorMapping;
}
