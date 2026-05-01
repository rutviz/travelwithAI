import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Trip } from "@travelwithai/shared";

const STATUS_STYLES: Record<Trip["status"], string> = {
  planning: "bg-yellow-100 text-yellow-700",
  booked: "bg-blue-100 text-blue-700",
  active: "bg-green-100 text-green-700",
  completed: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-100 text-red-600",
};

const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    userId: "user_1",
    title: "Japan Explorer",
    status: "booked",
    destinations: [
      { city: "Tokyo", country: "Japan", countryCode: "JP", coordinates: { lat: 35.6762, lng: 139.6503 }, arrivalDate: "2026-10-01", departureDate: "2026-10-08" },
      { city: "Kyoto", country: "Japan", countryCode: "JP", coordinates: { lat: 35.0116, lng: 135.7681 }, arrivalDate: "2026-10-08", departureDate: "2026-10-14" },
    ],
    startDate: "2026-10-01",
    endDate: "2026-10-14",
    travelers: 2,
    budget: { total: 4000, currency: "GBP", breakdown: { flights: 1200, accommodation: 1400, activities: 600, food: 500, transport: 200, misc: 100 }, spent: 2600 },
    itinerary: [],
    bookings: [],
    createdAt: "2026-04-10T10:00:00Z",
    updatedAt: "2026-04-15T12:00:00Z",
  },
  {
    id: "2",
    userId: "user_1",
    title: "Weekend in Barcelona",
    status: "planning",
    destinations: [
      { city: "Barcelona", country: "Spain", countryCode: "ES", coordinates: { lat: 41.3874, lng: 2.1686 }, arrivalDate: "2026-06-20", departureDate: "2026-06-23" },
    ],
    startDate: "2026-06-20",
    endDate: "2026-06-23",
    travelers: 1,
    itinerary: [],
    bookings: [],
    createdAt: "2026-04-28T09:00:00Z",
    updatedAt: "2026-04-28T09:00:00Z",
  },
  {
    id: "3",
    userId: "user_1",
    title: "New York City Break",
    status: "completed",
    destinations: [
      { city: "New York", country: "USA", countryCode: "US", coordinates: { lat: 40.7128, lng: -74.006 }, arrivalDate: "2026-02-10", departureDate: "2026-02-17" },
    ],
    startDate: "2026-02-10",
    endDate: "2026-02-17",
    travelers: 2,
    itinerary: [],
    bookings: [],
    createdAt: "2026-01-05T08:00:00Z",
    updatedAt: "2026-02-17T20:00:00Z",
  },
];

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const nights = Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
  const fmt = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  return `${fmt(s)} – ${fmt(e)} · ${nights} nights`;
}

export default function TripsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Trips</h1>
              <p className="text-gray-500 mt-1">{MOCK_TRIPS.length} trips planned</p>
            </div>
            <Link
              href="/chat"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              + New Trip
            </Link>
          </div>

          {/* Trip Cards */}
          <div className="flex flex-col gap-4">
            {MOCK_TRIPS.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                        {trip.title}
                      </h2>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize shrink-0 ${STATUS_STYLES[trip.status]}`}>
                        {trip.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {trip.destinations.map((d) => d.city).join(" → ")}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{formatDateRange(trip.startDate, trip.endDate)}</span>
                      <span>·</span>
                      <span>{trip.travelers} {trip.travelers === 1 ? "traveller" : "travellers"}</span>
                      {trip.budget && (
                        <>
                          <span>·</span>
                          <span>{trip.budget.currency} {trip.budget.total.toLocaleString()} budget</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Progress bar for budget */}
                  {trip.budget && (
                    <div className="shrink-0 w-24 hidden sm:block">
                      <p className="text-xs text-gray-400 mb-1 text-right">
                        {Math.round((trip.budget.spent / trip.budget.total) * 100)}% spent
                      </p>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${Math.min((trip.budget.spent / trip.budget.total) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state placeholder */}
          {MOCK_TRIPS.length === 0 && (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">✈️</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No trips yet</h2>
              <p className="text-gray-500 mb-6">Start planning your first adventure with AI.</p>
              <Link href="/chat" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Plan a Trip
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
