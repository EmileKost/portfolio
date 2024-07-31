import { IconPlus } from "./icons/Plus";

export const TheHeader = () => {
	return (
		<header className="px-2 md:px-6 py-14 flex justify-between items-center text-blue-primary">
			<h1 className="uppercase text-xl md:text-2xl ">Emile Kost</h1>
			<button className="group uppercase text-base md:text-xl flex items-center gap-2">
				<span className="group-hover:rotate-45 transition-transform">
					<IconPlus />
				</span>
				Menu
			</button>
		</header>
	);
};
