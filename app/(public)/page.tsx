import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/preview-suspense/PreviewSuspense";
import Projects from "./Projects";
import Image from "next/image";
import Bio from "./Bio";
export const getAllProjectsQuery = groq`
	*[_type == "project"] {
		...,
		technology[]->,
	} | order(_createdAt desc)
`;

export const getBioQuery = groq`
	*[_type == "bio"] {
		...,
	}
`;

export default async function HomePage() {
	if (previewData()) {
		return (
			<PreviewSuspense
				callback={
					<div role="status">
						<p>loading preview data...</p>
					</div>
				}
			></PreviewSuspense>
		);
	}

	const projects = await client.fetch(getAllProjectsQuery);
	const bio = await client.fetch(getBioQuery);

	console.log(bio[0]);

	return (
		<div className="flex flex-col gap-6">
			<Bio data={bio[0]} />
			<Projects projects={projects} />
		</div>
	);
}
