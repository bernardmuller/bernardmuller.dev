import { defineField, defineType } from "sanity";

export default defineType({
	name: "technology",
	title: "Technology",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "icon",
			title: "icon",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
	],
});