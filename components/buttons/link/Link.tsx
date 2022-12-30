import Link from "next/link";
import React from "react";
import { LinkButton } from "../../../types";

const LinkButton: React.FC<LinkButton> = ({ url, label }) => {
	return (
		<Link
			href={url}
			target="_blank"
			className="text-cus_white border border-grey_l py-1.5 px-4 text-sm hover:bg-grey_d hover:text-white"
		>
			{label}
		</Link>
	);
};

export default LinkButton;
