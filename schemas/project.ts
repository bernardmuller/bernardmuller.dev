import { defineField, defineType } from "sanity";

export default defineType({
	name: "project",
	title: "Project",
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
			name: "repo",
			title: "Github Repo",
			type: "string",
		}),
		defineField({
			name: "demo",
			title: "Demo Link",
			type: "string",
		}),
		defineField({
			title: "date",
			name: "Date",
			type: "datetime",
			options: {
				dateFormat: "YYYY-MM-DD",
				timeFormat: "HH:mm",
				timeStep: 15,
			},
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "string",
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "technology" } }],
		}),
	],
});
