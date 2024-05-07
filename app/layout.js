import Cursor from "./components/cursor";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor/>
        {children}
      </body>
      <Script defer src="/cursorScript.js"/>
    </html>
  );
}
