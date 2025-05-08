import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'InstaGang - Login',
  description: 'Login to your InstaGang account',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p className="text-sm">© {new Date().getFullYear()} InstaGang. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}