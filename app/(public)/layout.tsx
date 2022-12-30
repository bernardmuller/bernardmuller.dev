import "../../styles/globals.css";
import Drawer from "../../components/drawer/Drawer";
import Footer from "../../components/footer/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="bg-black">
			<head />
			<body className="text-cus_white">
				<Drawer>
					<div className="inline-block w-full p-2 pb-12 bg-black shadow-sm px-[10%] md:px-[17.5%]">
						{children}
					</div>
					<Footer />
				</Drawer>
			</body>
		</html>
	);
}
