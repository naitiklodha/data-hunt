import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
	title: "Data Hunt",
	description: "Built with love by Naitik Lodha and Yash Deshpande",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
