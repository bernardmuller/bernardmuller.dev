import Image from "next/image";
import React from "react";
import urlFor from "../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../rich-text/RichTextComponents";

const Bio = ({
	data: { greeting, subgreeting, image, bio },
}: {
	data: {
		greeting: string;
		subgreeting: string;
		bio: any;
		image: any;
	};
}) => {
	return (
		<div className="flex justify-center w-full pt-8 lg:pt-16">
			<div className="flex gap-6 w-full">
				<div className="flex flex-col-reverse gap-12 items-center text-center lg:flex-row lg:w-full lg:gap-0 lg:justify-between lg:items-start lg:text-left">
					<div className="grid gap-2 lg:w-[70%] text-grey_l">
						<span className=" text-4xl text-white">{greeting}</span>
						<span className=" text-grey_l">
							{subgreeting?.split("Bernard")}
							<strong className="text-red">
								{subgreeting?.split(" ").find((word) => {
									return word === "Bernard";
								})}
							</strong>
						</span>
						<PortableText
							value={[...bio]}
							components={RichTextComponents as any}
						/>
					</div>
					<div className="grid">
						{image && (
							<div className="relative flex justify-center items-center h-64 w-56 p-2 bg-black_l">
								<Image
									src={urlFor(image).url()}
									alt="profile_pic"
									className="relative w-full h-full object-cover overflow-clip p-2"
									fill
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bio;
