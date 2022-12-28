import Image from "next/image";
import React from "react";
import urlFor from "../../lib/urlFor";

const Bio = ({
	data: { greeting, image, bio },
}: {
	data: {
		greeting: string;
		bio: string;
		image: any;
	};
}) => {
	console.log(image);
	return (
		<div className="flex justify-center w-full pt-16">
			<div className="flex gap-6 w-full">
				<div className="flex flex-col-reverse gap-[3rem] items-center text-center md:flex-row md:gap-0 md:justify-between md:items-start md:text-left">
					<div className="grid gap-2 md:w-[70%]">
						<span className=" text-4xl">{greeting}</span>
						<span className="text-grey_l">{bio}</span>
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