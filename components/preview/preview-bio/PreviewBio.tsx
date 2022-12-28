"use client";

import { usePreview } from "../../../lib/sanity.preview";
import Bio from "../../../components/bio/Bio";

type Props = {
	query: string;
};

export default function PreviewBio({ query }: Props) {
	const bio = usePreview(null, query);
	console.log("Loading bio...", bio);
	return <Bio data={bio} />;
}
