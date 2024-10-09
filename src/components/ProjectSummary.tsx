import Badge from "./Badge";
import ExternalLink from "./ExternalLink";

/**
 * Summary for a project
 * @param title of project
 * @param summary of project
 * @param badges list of badges in the form { name: color }
 * @param githubURL url for github repo
 * @param previewImgURL url for preview image
 * @param liveURL url for live site (if exists)
 * @returns ProjectSummary component
 */
export default function ProjectSummary(props: {
    title: string;
    summary: string;
    badges: { name: string; color: string }[];
    githubURL: string;
    previewImgURL: string;
    liveURL?: string;
}) {
    return (
        <div className="flex grid grid-cols-1 md:grid-cols-7 justify-between gap-6">
            {/* preview image */}
            <img
                className="md:col-span-3 shadow rounded aspect-video object-cover"
                src={props.previewImgURL}
            />

            {/* info */}
            <div className="col-span-4 flex flex-col justify-between">
                {/* summary */}
                <div>
                    <h2 className="font-bold">{props.title}</h2>
                    <p className="text-sm">{props.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {props.badges.map((badge) => (
                            <Badge
                                key={badge.name}
                                text={badge.name}
                                color={badge.color}
                            />
                        ))}
                    </div>
                </div>
                <br />

                {/* links */}
                <div className="text-sm">
                    {props.liveURL ? (
                        <ExternalLink url={props.liveURL} text="Live Site" />
                    ) : (
                        <p>Live site coming soon</p>
                    )}

                    <ExternalLink
                        url={props.githubURL}
                        text="GitHub Repository"
                    />
                </div>
            </div>
        </div>
    );
}
