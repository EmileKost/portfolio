import { projects as testProjects } from "@/src/constants/projects";
import { Project } from "@/src/types/project";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";
import { Card } from "./cards/Card";

export const ProjectsSlider = (projects: any) => {
	const { verticalArray, horizontalArray } = splitProjectsArray(testProjects);

	return <div className="w-screen relative"></div>;
};
