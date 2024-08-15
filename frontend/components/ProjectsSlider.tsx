import { projects as testProjects } from "@/src/constants/projects";
import { Project } from "@/src/types/project";
import { splitProjectsArray } from "@/src/utils/splitProjectsArray";
import { CardVertical } from "./cards/CardVertical";

export const ProjectsSlider = (projects: any) => {
	const { verticalArray, horizontalArray } = splitProjectsArray(testProjects);

	return (
		<div className="w-screen relative">
			<div className="w-[200%] flex">
				<ul className="w-full flex justify-between animate-slider-vertical pl-10">
					{verticalArray &&
						verticalArray.length > 0 &&
						verticalArray.map((project: Project, idx: number) => (
							<CardVertical
								project={project}
								idx={idx}
							/>
						))}
				</ul>
				<ul className="w-full flex justify-between animate-slider-vertical pl-10">
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
			<div className="w-[200%] flex absolute top-16 z-[-10] pl-10">
				<div className="w-full flex justify-between animate-slider-horizontal">
					<div className="w-[350px] h-[220px] translate-y-[240px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] -translate-y-[200px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] translate-y-[200px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] -translate-y-[200px] bg-[grey]">
						TEST
					</div>
				</div>
				<div className="w-full flex justify-between animate-slider-horizontal">
					<div className="w-[350px] h-[220px] translate-y-[200px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] -translate-y-[200px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] translate-y-[200px] bg-[grey]">
						TEST
					</div>
					<div className="w-[350px] h-[220px] -translate-y-[200px] bg-[grey]">
						TEST
					</div>
				</div>
			</div>
		</div>
	);
};

// SLIDER
// - De Parralax is alleen zichtbaar op desktop, met de custom hook useBreakpointValue kunnen we hier voor kijken (of met css)
// - De slider is een parralax, met translate-z en twee verschillende sliders in een ander tempo kunnen we dit bereiken
// - De lijsten moeten draggable zijn, en de items moeten onHover naar voren komen zodat deze wel leesbaar zijn.

// - Je wilt sowieso eerst de projects lijst opdelen in either vertical of horizontal

// TODO:
// - Horizontal
// - Draggable
// - Clicking transition
