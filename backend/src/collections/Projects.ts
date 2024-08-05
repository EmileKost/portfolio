import { CollectionConfig } from "payload/types";

export const Projects = {
	slug: "projects",
	fields: [
		{
			name: "title",
			label: "Project title",
			type: "text",
			required: true,
		},
		{
			name: "subtitle",
			label: "Subtitle",
			type: "text",
			required: true,
		},
		{
			name: "tags",
			label: "Tags",
			type: "array",
			required: true,
			maxRows: 5,
			fields: [
				{
					name: "tagsItem",
					label: "Tag content",
					type: "text",
					maxLength: 30,
				},
			],
		},
		{
			// TODO: Later make this hidden and auto generate this URL
			name: "url",
			label: "URL (This will be auto generated)",
			type: "text",
			required: true,
		},
		{
			name: "cardType",
			label: "Card type",
			type: "radio",
			required: true,
			options: [
				{
					label: "Vertical",
					value: "vertical",
				},
				{
					label: "Horizontal",
					value: "horizontal",
				},
			],
			defaultValue: "horizontal",
			admin: {
				layout: "vertical",
			},
		},
	],
} as CollectionConfig;
