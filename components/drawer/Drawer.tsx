"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drawer = ({ children }: { children: any }) => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col  w-full">
				{/* <!-- Navbar --> */}
				<div className="w-full navbar bg-black lg:pl-[16%] lg:pr-[17%] ">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-3"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="hidden lg:block flex-1 px-2 mx-2">
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
					</div>
					<div className="flex-none hidden lg:block ">
						<ul className="menu menu-horizontal">
							{/* <!-- Navbar menu content here --> */}
							<li>
								<Link href="/about">about</Link>
							</li>
							<li>
								<Link href="#project">projects</Link>
							</li>
							<li>
								<Link href="#thoughts">thoughts</Link>
							</li>
							<li>
								<Link href="#dashboard">dashboard</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- Page content here --> */}
				{children}
			</div>
			<div className="drawer-side h-screen top-0">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-2 w-80 bg-black_l">
					{/* <!-- Sidebar content here --> */}
					<div className="flex w-full justify-end lg:hidden ">
						<label
							htmlFor="my-drawer-3"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
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
