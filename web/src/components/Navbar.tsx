import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
          TravelWithAI
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/trips" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            My Trips
          </Link>
          <Link
            href="/chat"
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Plan a Trip
          </Link>
        </div>
      </div>
    </nav>
  );
}
