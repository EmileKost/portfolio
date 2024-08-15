import { ProjectsSlider } from "./ProjectsSlider";

import { useBreakpointValue } from "@/src/hooks/useBreakpointValue";

export const Projects = (projects: any) => {
	const isMobile = useBreakpointValue();
	return (
		<div className="w-full h-screen px-2 md:px-6 relative flex flex-col justify-center items-center">
			<div className="absolute bottom-10 right-2 md:right-16">
				<h2 className="text-blue-primary uppercase text-[90px]">Projects</h2>
				<a
					href=""
					className="text-black-primary text-base sm:text-md md:text-xl">
					Or checkout my work on Github <span>Icon arrow</span>
				</a>
			</div>
			<div className="">
				{isMobile ? (
					<div>I am the mobile slider</div>
				) : (
					<ProjectsSlider projects={projects} />
				)}
			</div>
		</div>
	);
};
