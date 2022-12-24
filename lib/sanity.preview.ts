"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
	throw new Error(
		"This page is not available in preview mode. Please make sure you are signed in to the CMS."
	);
}

if (!projectId || !dataset) {
	throw new Error("Missing projectId or dataset. Check your sanity.json.");
}

export const usePreview = definePreview({
	projectId,
	dataset,
	onPublicAccessOnly,
});
