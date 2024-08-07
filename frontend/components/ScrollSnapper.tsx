import { ReactNode } from "react";

type ScrollSnapperProps = {
	children: ReactNode;
};

export const ScrollSnapper = ({ children }: ScrollSnapperProps) => (
	<div className="w-full max-h-screen overflow-y-scroll snap-y snap-mandatory">
		{children}
	</div>
);
