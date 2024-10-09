import projectData from "../data/projectData.json";
import getRandomBadgeColors from "../util/getRandomBadgeColors";
import ProjectSummary from "./ProjectSummary";

/**
 * Expected type of project data
 */
interface ProjectData {
    title: string;
    summary: string;
    badges: string[];
    githubURL: string;
    previewImgURL: string;
    liveURL?: string;
}

/**
 * Component for featured projects
 * @returns ProjectSection component
 */
export default function ProjectsSection() {
    const allBadges: string[] = projectData.projects
        .map((project: ProjectData) => project.badges)
        .flat();
    const badgeColorMapping: { [name: string]: string } =
        getRandomBadgeColors(allBadges);

    return (
        <section className="w-full text-lime-900">
            <h1 className="font-bold">Featured Projects</h1>
            <br />
            <div className="flex flex-col gap-10">
                {projectData.projects.map((project: ProjectData) => {
                    return (
                        <ProjectSummary
                            key={project.title}
                            title={project.title}
                            summary={project.summary}
                            badges={project.badges.map((name) => {
                                return {
                                    name: name,
                                    color: badgeColorMapping[name],
                                };
                            })}
                            githubURL={project.githubURL}
                            previewImgURL={project.previewImgURL}
                            liveURL={project.liveURL}
                        />
                    );
                })}
            </div>
        </section>
    );
}
