import { NextSeo } from "next-seo";

export default function Head() {
	return (
		<>
			<title>Bernard Muller</title>
			<meta
				content="width=device-width, initial-scale=1"
				name="viewport"
			/>
			<NextSeo
				useAppDir={true}
				themeColor="#CE7B91"
				titleTemplate="Bernard Muller"
				description="I am a proactive and passionate software engineer based in Cape Town."
			/>
			<link rel="icon" href="/favicon.ico" />
		</>
	);
}
