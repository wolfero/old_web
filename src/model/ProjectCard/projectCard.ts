type ProjectCard = {
    name: string;
    description: string;
    webLink: string;
    githubLink: string;
    image: string;
};

export interface ProjectCardProps {
    project: ProjectCard;
};