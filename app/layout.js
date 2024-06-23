"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux"
import store from "@/store/store";
import Link from "next/link";
import "./layout.scss"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="menu">
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/user'}>User</Link></li>
          <li><Link target="_blank" href={'/api/user'}>User API</Link></li>
        </ul>
      </div>
        <Provider store={store}> {children} </Provider>
        </body>
    </html>
  );
}
