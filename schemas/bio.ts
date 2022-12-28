import { defineField, defineType } from "sanity";

export default defineType({
	name: "bio",
	title: "Bio",
	type: "document",
	fields: [
		defineField({
			name: "greeting",
			title: "Greeting",
			type: "string",
		}),
		defineField({
			name: "subgreeting",
			title: "Sub Greeting",
			type: "string",
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "blockContent",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});
