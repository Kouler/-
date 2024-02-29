import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One word",
  description: "one word reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between">
          <header className="navbar my-header">
            <div className="navbar-start">
              <Link className="header-a" href="/library">
                Моя библиотека
              </Link>
            </div>
        
            <div className="navbar-center">
              <Link className="main-word" href="/">
                OneWord
              </Link>
            </div>

            <div className="navbar-end">
              
                
            </div>
          </header>
      
          {children}

          <footer className="footer items-center p-4 bg-zinc-800 text-neutral-content">
            <aside className="items-center grid-flow-col">
              Сайт разработан Царёвым Ильёй
            </aside>
          </footer>
        </div>
      </body>
    </html>
  );
}
