"use client";

import { Menu } from "./Menu";

export const TheHeader = () => {
	return (
		<header className="z-max px-2 md:px-6 py-14 flex justify-between items-start md:items-center font-primary w-full fixed top-0 left-0">
			<h1 className="uppercase text-xl md:text-2xl text-blue-primary">
				Emile Kost
			</h1>
			<Menu />
		</header>
	);
};
