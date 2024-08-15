import { projects as testProjects } from "@/src/constants/projects";
import { Project } from "@/src/types/project";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";
import { CardVertical } from "./cards/CardVertical";

export const ProjectsSlider = (projects: any) => {
	const { verticalArray, horizontalArray } = splitProjectsArray(testProjects);

	return (
		<div className="w-screen">
			<div className="w-[200%] flex">
				<ul className="w-full flex gap-28 animate-slider h">
					{verticalArray &&
						verticalArray.length > 0 &&
						verticalArray.map((project: Project, idx: number) => (
							<CardVertical
								project={project}
								idx={idx}
							/>
						))}
				</ul>
				<ul className="w-full flex gap-28 animate-slider">
					{verticalArray &&
						verticalArray.length > 0 &&
						verticalArray.map((project: Project, idx: number) => (
							<CardVertical
								project={project}
								idx={idx}
							/>
						))}
				</ul>
			</div>
		</div>
	);
};

// SLIDER
// - De Parralax is alleen zichtbaar op desktop, met de custom hook useBreakpointValue kunnen we hier voor kijken (of met css)
// - De slider is een parralax, met translate-z en twee verschillende sliders in een ander tempo kunnen we dit bereiken
// - De lijsten moeten draggable zijn, en de items moeten onHover naar voren komen zodat deze wel leesbaar zijn.

// - Je wilt sowieso eerst de projects lijst opdelen in either vertical of horizontal
