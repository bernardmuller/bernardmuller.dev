import { defineField, defineType } from "sanity";

export default defineType({
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "projects",
			title: "Projects",
			type: "array",
			of: [{ type: "reference", to: { type: "project" } }],
		}),
	],
});
