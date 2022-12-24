import React from "react";
import ProjectCard from "../../components/cards/project-card/ProjectCard";
import { Project } from "../../types";

const Projects = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="flex gap-6">
			{projects.map((project: Project) => {
				return <ProjectCard key={project._id} data={project} />;
			})}
		</div>
	);
};

export default Projects;
