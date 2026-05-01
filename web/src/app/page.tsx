import Link from "next/link";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: "✈️",
    title: "AI Trip Planning",
    description: "Describe your dream trip in plain English and let Claude build a full itinerary.",
  },
  {
    icon: "🏨",
    title: "Hotels & Flights",
    description: "Search and compare thousands of flights and hotels in one place.",
  },
  {
    icon: "🗺️",
    title: "Day-by-Day Itinerary",
    description: "Get a detailed schedule with activities, restaurants, and transport.",
  },
  {
    icon: "👥",
    title: "Group Travel",
    description: "Coordinate trips with friends — split expenses, vote on options, stay in sync.",
  },
];

const steps = [
  { step: "1", title: "Tell us where you want to go", description: "Chat with our AI about your destination, dates, and travel style." },
  { step: "2", title: "Review your personalised plan", description: "Get a full itinerary with flights, hotels, and activities matched to you." },
  { step: "3", title: "Book everything in one place", description: "Confirm bookings without leaving the app. All your trip info in one place." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Powered by Claude AI
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Plan your next trip with <span className="text-blue-600">AI</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            Just tell us where you want to go. Our AI handles flights, hotels, activities,
            and day-by-day itineraries — all through natural conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Start Planning for Free
            </Link>
            <Link
              href="/trips"
              className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View My Trips
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything you need to travel smarter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How it works</h2>
          <div className="flex flex-col gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-blue-600">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to go?</h2>
          <p className="text-blue-100 mb-8 text-lg">Start planning your next adventure in under a minute.</p>
          <Link
            href="/chat"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Start Planning
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2026 TravelWithAI
      </footer>
    </>
  );
}
