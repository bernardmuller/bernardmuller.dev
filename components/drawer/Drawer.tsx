"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drawer = ({ children }: { children: any }) => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col absolute w-full top-0">
				{/* <!-- Navbar --> */}
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
				{/* <!-- Page content here --> */}
				{children}
			</div>
			<div className="drawer-side absolute h-screen top-0">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-base-100">
					{/* <!-- Sidebar content here --> */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Drawer;
