"use client";

import { format } from "date-fns";
import Link from "next/link";
import React, { useState } from "react";
import { Project } from "../../../types";
import LinkButton from "../../buttons/link/Link";
import { motion } from "framer-motion";

const ProjectCard = ({ data }: { data: Project }) => {
	const date = new Date(data.Date);
	return (
		<div className="flex flex-col justify-between w-full bg-black_l p-2">
			<div className="flex flex-col">
				<span className="text-xs text-red">{format(date, "yyyy")}</span>
				<span className="text-lg py-1">{data.title}</span>
				<span className={`text-grey_l text-xs line-clamp-2`}>
					{data.description}
				</span>
				<div className="flex gap-2 pt-2">
					{data.demo && <LinkButton url={data.demo} label="demo" />}
					{data.repo && <LinkButton url={data.repo} label="source" />}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
