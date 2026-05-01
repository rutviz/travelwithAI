// ─── User ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  preferences: TravelerPreferences;
  loyaltyPrograms: LoyaltyProgram[];
  createdAt: string;
}

export interface TravelerPreferences {
  travelStyle: "budget" | "mid-range" | "luxury";
  activityLevel: "relaxed" | "moderate" | "active";
  dietaryRestrictions: string[];
  preferredAirlines: string[];
  preferredHotelChains: string[];
  seatPreference: "window" | "aisle" | "no-preference";
}

export interface LoyaltyProgram {
  provider: string;
  memberId: string;
  tier?: string;
  points?: number;
}

// ─── Trip ────────────────────────────────────────────────────────────────────

export interface Trip {
  id: string;
  userId: string;
  title: string;
  status: TripStatus;
  destinations: Destination[];
  startDate: string;
  endDate: string;
  travelers: number;
  budget?: Budget;
  itinerary: ItineraryDay[];
  bookings: Booking[];
  groupId?: string;
  createdAt: string;
  updatedAt: string;
}

export type TripStatus = "planning" | "booked" | "active" | "completed" | "cancelled";

export interface Destination {
  city: string;
  country: string;
  countryCode: string;
  coordinates: Coordinates;
  arrivalDate: string;
  departureDate: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Budget {
  total: number;
  currency: string;
  breakdown: {
    flights: number;
    accommodation: number;
    activities: number;
    food: number;
    transport: number;
    misc: number;
  };
  spent: number;
}

// ─── Itinerary ────────────────────────────────────────────────────────────────

export interface ItineraryDay {
  date: string;
  items: ItineraryItem[];
}

export interface ItineraryItem {
  id: string;
  type: "flight" | "hotel" | "activity" | "restaurant" | "transport" | "free";
  title: string;
  startTime: string;
  endTime: string;
  location?: Location;
  bookingId?: string;
  notes?: string;
}

export interface Location {
  name: string;
  address: string;
  coordinates: Coordinates;
  placeId?: string;
}

// ─── Flight ──────────────────────────────────────────────────────────────────

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: Airport;
  destination: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  stops: FlightStop[];
  cabinClass: CabinClass;
  price: Price;
  availableSeats: number;
  carbonKg?: number;
}

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  terminal?: string;
}

export interface FlightStop {
  airport: Airport;
  arrivalTime: string;
  departureTime: string;
  layoverMinutes: number;
}

export type CabinClass = "economy" | "premium-economy" | "business" | "first";

// ─── Hotel ───────────────────────────────────────────────────────────────────

export interface Hotel {
  id: string;
  name: string;
  stars: number;
  rating: number;
  reviewCount: number;
  location: Location;
  images: string[];
  amenities: string[];
  rooms: RoomType[];
  checkIn: string;
  checkOut: string;
  price: Price;
  provider: string;
}

export interface RoomType {
  id: string;
  name: string;
  maxOccupancy: number;
  beds: string;
  pricePerNight: Price;
  amenities: string[];
}

// ─── Activity ─────────────────────────────────────────────────────────────────

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  location: Location;
  duration: number;
  price: Price;
  rating: number;
  reviewCount: number;
  images: string[];
  availableTimes: string[];
  provider: string;
  tags: string[];
}

export type ActivityCategory =
  | "tours"
  | "food"
  | "adventure"
  | "culture"
  | "nightlife"
  | "wellness"
  | "transport";

// ─── Booking ─────────────────────────────────────────────────────────────────

export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  type: "flight" | "hotel" | "activity" | "transport";
  status: BookingStatus;
  confirmationNumber: string;
  provider: string;
  totalPrice: Price;
  travelers: TravelerInfo[];
  createdAt: string;
}

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "refunded"
  | "completed";

export interface TravelerInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  passportNumber?: string;
  nationality?: string;
  loyaltyNumber?: string;
}

// ─── Price ───────────────────────────────────────────────────────────────────

export interface Price {
  amount: number;
  currency: string;
  displayAmount?: string;
}

// ─── Group ───────────────────────────────────────────────────────────────────

export interface Group {
  id: string;
  name: string;
  tripId: string;
  members: GroupMember[];
  expenses: GroupExpense[];
  polls: Poll[];
  createdAt: string;
}

export interface GroupMember {
  userId: string;
  name: string;
  role: "organizer" | "member";
  joinedAt: string;
}

export interface GroupExpense {
  id: string;
  title: string;
  amount: Price;
  paidBy: string;
  splitAmong: string[];
  date: string;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  deadline?: string;
  closed: boolean;
}

export interface PollOption {
  id: string;
  label: string;
  votes: string[];
}

// ─── AI Chat ─────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  tripContext?: Partial<Trip>;
}

export interface TripPlanningSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  draftTrip?: Partial<Trip>;
  createdAt: string;
  updatedAt: string;
}

// ─── API Response ─────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
