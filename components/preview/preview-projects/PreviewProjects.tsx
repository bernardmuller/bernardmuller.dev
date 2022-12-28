"use client";

import { usePreview } from "../../../lib/sanity.preview";
import Projects from "../../projects/Projects";

type Props = {
	query: string;
};

export default function PreviewProjects({ query }: Props) {
	const projects = usePreview(null, query);
	console.log("Loading projects...", projects);
	return <Projects projects={projects} />;
}
