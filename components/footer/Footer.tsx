import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-col w-full py-8 gap-3 items-center md:items-start md:px-[17.5%] md:gap-0 md:py-4 md:justify-between md:fixed md:bottom-0 md:flex-row">
			<span className="text-grey_d text-s">email: me @ this domain</span>
			<div className="flex flex-col md:flex-row gap-3 ">
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
	);
};

export default Footer;
