import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<>
			<div className="w-screen bg-black  ">
				<div className="flex justify-between items-center w-full h-14 px-[17.5%] ">
					<Link href="/" className=" max-w-[120px]">
						<div className="w-[50px] h-[50px] bg-red-500">
							<Image
								src={"/monogram.png"}
								alt="monogram"
								width={35}
								height={35}
							/>
						</div>
					</Link>
					<div className="flex justify-end h-full">
						<ul className="flex justify-end gap-8 h-full items-center">
							<li className=" h-5 text-grey_l flex items-center hover:border-b-2 hover:text-cus_white ">
								<Link href="/about">about</Link>
							</li>
							<li className=" h-5 text-grey_l flex items-center hover:border-b-2  hover:text-cus_white">
								<Link href="#project">projects</Link>
							</li>
							<li className=" h-5 text-grey_l flex items-center hover:border-b-2 hover:text-cus_white">
								<Link href="#thoughts">thoughts</Link>
							</li>
							<li className=" h-5 text-grey_l flex items-center hover:border-b-2 hover:text-cus_white">
								<Link href="#dashboard">dashboard</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
