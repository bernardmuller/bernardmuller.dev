import Link from "next/link";
import React from "react";
import { LinkButton } from "../../../types";

const LinkButton: React.FC<LinkButton> = ({ url, label }) => {
	return (
		<Link
			href={url}
			target="_blank"
			className="text-cus_white border border-grey_light py-2 px-4 hover:bg-red-900/40"
		>
			{label}
		</Link>
	);
};

export default LinkButton;
