import React from "react";
import ProjectCard from "../cards/project-card/ProjectCard";
import { Project } from "../../types";

const Projects = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="flex flex-col md:flex-row gap-6">
			{projects.map((project: Project) => {
				return <ProjectCard key={project._id} data={project} />;
			})}
		</div>
	);
};

export default Projects;
