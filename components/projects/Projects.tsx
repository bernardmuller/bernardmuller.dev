import React from "react";
import ProjectCard from "../cards/project-card/ProjectCard";
import { Project } from "../../types";

const Projects = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="grid grid-cols-1 gap-4 ">
			<h3 className="text-lg text-center lg:text-left">Projects</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project: Project) => {
					return <ProjectCard key={project._id} data={project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
