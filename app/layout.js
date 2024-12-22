import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "Pulkit's Portfolio",
  description: "This is the portfolio of Pulkit Sinha",
  icons: {
    icon: "/assets/Pulkit.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
