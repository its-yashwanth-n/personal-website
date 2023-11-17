import "./globals.css";
import Footer from "./sections/Footer";
import NavigationBar from "./sections/NavigationBar";

const author = "Yashwanth Nagaraju"

export const metadata = {
  title: {
    default: `Portfolio | ${author}`,
  },
  creator: author,
  description: "Welcome to the personal portfolio of Yashwanth Nagaraju",
  type: 'website',
  keywords: [
    "Yashwanth Nagaraju",
    "Yashwanth Nagaraju - Frontend Developer",
    "Yashwanth Nagaraju - Software Engineer",
    "Frontend Developer",
    "Software Engineer",
    "Frontend Developer Portfolio"
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
