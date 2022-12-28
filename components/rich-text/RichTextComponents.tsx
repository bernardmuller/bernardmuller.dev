import urlFor from "../../lib/urlFor";
import Image from "next/image";
// import Link from "next/link";

// TODO: replace components with common components

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className="relative flex justify-center items-center h-64 w-56 p-2 bg-black_l">
					<Image
						className="object-contain"
						src={urlFor(value).url()}
						alt="image"
						fill
					/>
				</div>
			);
		},
		list: {
			bullet: ({ children }: any) => {
				return <ul className="list-disc">{children}</ul>;
			},
			number: ({ children }: any) => (
				<ol className="list-decimal">{children}</ol>
			),
		},
		block: {
			h4: ({ children }: any) => (
				<h4 className="text-red text-xl">{children}</h4>
			),
			p: ({ children }: any) => {
				<p className="text-grey_l">{children}</p>;
			},
		},
	},
	marks: {
		link: ({ children, value }: { children: any; value: any }) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<a href={value.href} rel={rel}>
					{children}
				</a>
			);
		},
	},
};
