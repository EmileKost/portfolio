import { useRef } from "react";
import { projects as testProjects } from "@/src/constants/projects";
import { Project } from "@/src/types/project";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";
import { Card } from "./cards/Card";

import { useDraggableSlider } from "@/src/hooks/useDraggableSlider";

export const ProjectsSlider = (projects: any) => {
	const sliderRef = useRef(null);
	const { positionX } = useDraggableSlider(sliderRef);

	return (
		<div
			ref={sliderRef}
			style={{
				width: "300px",
				height: "100px",
				backgroundColor: "lightgray",
				position: "relative",
				cursor: "grab",
			}}>
			<div style={{ position: "absolute", left: positionX }}>Drag Me</div>
		</div>
	);
};
