import ThemeContext from "./ThemeContext";
import "./globals.css";
import { handrawn, francois, oswald } from "@/styles/font";
import NavigationBar from "./sections/NavigationBar";
import Social from "./sections/Social";
import Footer from "./sections/Footer";
import Effect from "./sections/Effects";

const author = "Yashwanth Nagaraju";

export const metadata = {
  title: {
    default: author,
  },
  creator: author,
  description: "Welcome to the personal portfolio of Yashwanth Nagaraju",
  type: "website",
  keywords: [
    "Yashwanth Nagaraju",
    "Yashwanth Nagaraju - Frontend Developer",
    "Yashwanth Nagaraju - Software Engineer",
    "Frontend Developer",
    "Software Engineer",
    "Frontend Developer Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${handrawn.variable} ${francois.variable} ${oswald.variable}`}
    >
      <body>
        <ThemeContext>
          <NavigationBar />
          <Social />
          <Effect />
          {children}
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
