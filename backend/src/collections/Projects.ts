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
		{
			name: "cardImages",
			label: "Card images",
			type: "array",
			minRows: 1,
			maxRows: 2,
			required: true,
			fields: [
				{
					name: "image",
					label: "Image",
					type: "upload",
					relationTo: "media",
				},
			],
		},
		{
			name: "cardVideo",
			label: "Card video",
			required: false,
			type: "upload",
			relationTo: "media",
		},
		{
			name: "date",
			label: "Date",
			type: "date",
			required: true,
			admin: {
				date: {
					pickerAppearance: "monthOnly",
					displayFormat: "MMMM yyyy",
				},
			},
		},
		{
			name: "client",
			label: "Client",
			required: false,
			type: "text",
		},
		{
			name: "paragraphs",
			label: "Text paragraphs",
			type: "array",
			required: true,
			minRows: 1,
			maxRows: 5,
			fields: [
				{
					name: "content",
					label: "Text content",
					type: "textarea",
				},
			],
		},
		{
			name: "heroImage",
			label: "Image displayed on hero",
			required: true,
			type: "upload",
			relationTo: "media",
		},
		{
			name: "sliderImages",
			label: "Slider images",
			type: "array",
			minRows: 1,
			maxRows: 6,
			required: true,
			fields: [
				{
					name: "image",
					label: "Image",
					type: "upload",
					relationTo: "media",
				},
			],
		},
		{
			name: "githubUrl",
			label: "Github URL",
			type: "text",
			required: false,
		},
	],
} as CollectionConfig;
