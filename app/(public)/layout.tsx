import Image from "next/image";
import "../../styles/globals.css";
import monogram from "../../assets/png/monogram.png";
import Link from "next/link";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				{/* TODO: extract header component */}
				<div className="relative h-screen w-screen bg-black text-cus_white ">
					<div className="flex justify-between w-full h-14 px-[17.5%] ">
						<Link href="/" className=" max-w-[120px]">
							<div className="w-[50px] h-[50px] bg-red-500">
								<Image src={monogram} alt="monogram" />
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
					<div className="flex flex-col w-full h-16 p-2 bg-black shadow-sm px-[17.5%]">
						{children}
					</div>
					{/* TODO: extract footer component */}
					<footer className="fixed bottom-0 flex justify-between w-full py-1 px-[17.5%]">
						<span className="text-grey_d text-s">
							email: me at this domain
						</span>
						<div className="flex gap-3 ">
							<a
								href="https://github.com/bernardmuller"
								target="_blank"
								rel="noreferrer"
								className="text-s text-grey_d hover:text-cus_white"
							>
								github
							</a>
							<a
								href="https://www.linkedin.com/in/bernard-muller-a9a53a174/"
								target="_blank"
								rel="noreferrer"
								className="text-s text-grey_d hover:text-cus_white"
							>
								linkedin
							</a>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
