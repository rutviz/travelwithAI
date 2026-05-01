import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Trip, ItineraryDay } from "@travelwithai/shared";

const MOCK_TRIP: Trip = {
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
  budget: {
    total: 4000,
    currency: "GBP",
    breakdown: { flights: 1200, accommodation: 1400, activities: 600, food: 500, transport: 200, misc: 100 },
    spent: 2600,
  },
  itinerary: [
    {
      date: "2026-10-01",
      items: [
        { id: "i1", type: "flight", title: "LHR → NRT · BA006", startTime: "13:00", endTime: "09:00", notes: "Terminal 5 · Confirmation: BA1234567" },
        { id: "i2", type: "transport", title: "Narita Express to Shinjuku", startTime: "10:30", endTime: "11:45", notes: "JR Pass valid" },
        { id: "i3", type: "hotel", title: "Check in — Shinjuku Granbell Hotel", startTime: "15:00", endTime: "15:30" },
      ],
    },
    {
      date: "2026-10-02",
      items: [
        { id: "i4", type: "activity", title: "Tsukiji Outer Market breakfast tour", startTime: "08:00", endTime: "10:00" },
        { id: "i5", type: "activity", title: "TeamLab Borderless (digital art)", startTime: "11:00", endTime: "14:00" },
        { id: "i6", type: "restaurant", title: "Dinner — Ichiran Ramen, Shinjuku", startTime: "19:00", endTime: "20:00" },
      ],
    },
    {
      date: "2026-10-03",
      items: [
        { id: "i7", type: "activity", title: "Senso-ji Temple & Asakusa", startTime: "09:00", endTime: "12:00" },
        { id: "i8", type: "free", title: "Free afternoon — explore Akihabara", startTime: "13:00", endTime: "18:00" },
        { id: "i9", type: "activity", title: "Tokyo Tower at sunset", startTime: "17:30", endTime: "19:00" },
      ],
    },
  ],
  bookings: [],
  createdAt: "2026-04-10T10:00:00Z",
  updatedAt: "2026-04-15T12:00:00Z",
};

const TYPE_ICON: Record<string, string> = {
  flight: "✈️",
  hotel: "🏨",
  activity: "🎯",
  restaurant: "🍜",
  transport: "🚆",
  free: "🌟",
};

const TYPE_BADGE: Record<string, string> = {
  flight: "bg-sky-100 text-sky-700",
  hotel: "bg-purple-100 text-purple-700",
  activity: "bg-orange-100 text-orange-700",
  restaurant: "bg-green-100 text-green-700",
  transport: "bg-gray-100 text-gray-600",
  free: "bg-yellow-100 text-yellow-700",
};

function formatDay(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}

const BUDGET_CATEGORIES = [
  { label: "Flights", key: "flights" as const, color: "bg-sky-500" },
  { label: "Accommodation", key: "accommodation" as const, color: "bg-purple-500" },
  { label: "Activities", key: "activities" as const, color: "bg-orange-500" },
  { label: "Food", key: "food" as const, color: "bg-green-500" },
  { label: "Transport", key: "transport" as const, color: "bg-gray-400" },
  { label: "Misc", key: "misc" as const, color: "bg-yellow-400" },
];

export default function TripDetailPage({ params }: { params: { id: string } }) {
  const trip = MOCK_TRIP; // In production: fetch by params.id

  const spentPct = trip.budget ? Math.round((trip.budget.spent / trip.budget.total) * 100) : 0;

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 min-h-screen bg-gray-50">
        {/* Trip Hero */}
        <div className="bg-white border-b border-gray-100 px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <Link href="/trips" className="hover:text-gray-600 transition-colors">My Trips</Link>
              <span>›</span>
              <span className="text-gray-700">{trip.title}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{trip.title}</h1>
                <p className="text-gray-500">
                  {trip.destinations.map((d) => `${d.city}, ${d.country}`).join(" → ")}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  <span>
                    📅{" "}
                    {new Date(trip.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    {" – "}
                    {new Date(trip.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span>👥 {trip.travelers} travellers</span>
                </div>
              </div>
              <span className="inline-block text-sm font-medium px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 capitalize shrink-0 self-start">
                {trip.status}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Itinerary */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Itinerary</h2>
            <div className="flex flex-col gap-8">
              {trip.itinerary.map((day: ItineraryDay, dayIdx) => (
                <div key={day.date}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      Day {dayIdx + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{formatDay(day.date)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {day.items.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 hover:shadow-sm transition-shadow">
                        <div className="text-xl shrink-0">{TYPE_ICON[item.type] ?? "📌"}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${TYPE_BADGE[item.type] ?? "bg-gray-100 text-gray-600"}`}>
                              {item.type}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            {item.startTime} – {item.endTime}
                          </p>
                          {item.notes && <p className="text-xs text-gray-500 mt-1">{item.notes}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl border border-dashed border-gray-200 text-center text-sm text-gray-400">
              More days being built… &nbsp;
              <Link href="/chat" className="text-blue-500 hover:underline">
                Add more to your trip →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Budget */}
            {trip.budget && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Budget</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Spent</span>
                  <span className="font-semibold text-gray-900">
                    {trip.budget.currency} {trip.budget.spent.toLocaleString()}
                    <span className="text-gray-400 font-normal"> / {trip.budget.total.toLocaleString()}</span>
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${spentPct}%` }} />
                </div>
                <div className="flex flex-col gap-2">
                  {BUDGET_CATEGORIES.map(({ label, key, color }) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${color}`} />
                        <span className="text-gray-500">{label}</span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {trip.budget!.currency} {trip.budget!.breakdown[key].toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Destinations */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Destinations</h3>
              <div className="flex flex-col gap-3">
                {trip.destinations.map((dest, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{dest.city}, {dest.country}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(dest.arrivalDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                        {" – "}
                        {new Date(dest.departureDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Link
                href="/chat"
                className="bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-blue-700 transition-colors"
              >
                Modify with AI
              </Link>
              <button className="border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
