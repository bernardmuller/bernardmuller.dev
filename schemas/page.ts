import { defineField, defineType } from "sanity";

export default defineType({
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		defineField({
			name: "template",
			title: "Template",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
		}),
		defineField({
			name: "url",
			title: "URL",
			type: "string",
		}),
		defineField({
			name: "sections",
			title: "Sections",
			type: "array",
			of: [
				// {
				// 	type: "reference",
				// 	to: { type: "project" },
				// 	title: "Porject",
				// },
				// { type: "reference", to: { type: "bio" }, title: "Bio" },
				{ type: "reference", to: { type: "bio" }, name: "Bio" },
				{
					type: "reference",
					to: { type: "projects" },
					name: "Projects",
				},
				// { type: "blockContent" },
			],
		}),
	],
	preview: {
		select: {
			slug: "slug",
			template: "template",
		},
		prepare(selection) {
			const { slug, template } = selection;
			return {
				title: `${slug.current} [${template}]`,
			};
		},
	},
});
