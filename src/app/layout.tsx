import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NHL Tracker",
  description: "Live NHL schedule and scores powered by NHL API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0C2340] text-white font-sans">
        {/* Header */}
        <header className="bg-[#041E42] shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/favicon.ico" alt="NHL logo" width={40} height={40} />
              <h1 className="text-2xl font-bold tracking-wide">NHL Tracker</h1>
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-gray-300">Schedule</Link>
              <Link href="/teams" className="hover:text-gray-300">Teams</Link>
              <Link href="/stats" className="hover:text-gray-300">Stats</Link>
              <Link href="/markets" className="hover:text-gray-300">Markets</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto py-8 px-4">{children}</main>

        {/* Footer */}
        <footer className="bg-[#041E42] text-center py-4 mt-8 text-gray-400 text-sm">
          <p>Data provided by NHL API — Not affiliated with NHL</p>
        </footer>
      </body>
    </html>
  );
}
