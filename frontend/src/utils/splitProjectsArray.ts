import { Project } from "../types/project";

export const splitProjectsArray = (projects: any) => {
	if (!projects) return { horizontalArray: [], verticalArray: [] };

	const horizontalArray: Project[] = [];
	const verticalArray: Project[] = [];

	projects.forEach((project: any) => {
		project.isVertical === true
			? verticalArray.push(project)
			: horizontalArray.push(project);
	});

	return { horizontalArray, verticalArray };
};
