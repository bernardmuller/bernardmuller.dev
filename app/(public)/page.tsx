import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/preview-suspense/PreviewSuspense";
import Projects from "./Projects";
import Image from "next/image";
import Bio from "./Bio";
import Technologies from "./Technologies";
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

export const getTechnologiesQuery = groq`
	*[_type == "technology"] {
		...,
	}
`;

export default async function HomePage() {
	const projects = await client.fetch(getAllProjectsQuery);
	const bio = await client.fetch(getBioQuery);
	const tech = await client.fetch(getTechnologiesQuery);

	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role="status">
						<p>loading preview data...</p>
					</div>
				}
			>
				<div className="flex flex-col gap-6">
					<Bio data={bio[0]} />
					<Projects projects={projects} />
				</div>
			</PreviewSuspense>
		);
	}

	return (
		<div className="flex flex-col gap-[4rem] md:gap-6">
			<Bio data={bio[0]} />
			<Projects projects={projects} />
			{/* <Technologies data={tech} /> */}
		</div>
	);
}
