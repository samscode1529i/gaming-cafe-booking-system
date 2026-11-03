
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Tv,
  Snowflake,
  Gamepad2,
  Monitor,
  Check,
  Minus,
  Plus,
  CalendarDays,
  Clock3,
  ArrowLeft,
} from "lucide-react";

type Room = {
  id: number;
  name: string;
  price: number;
  available: boolean;
  players: number;
  members: number;
  description: string;
  category: string;
  image: string[];
  amenities: string[];
  rules: string[];
};

const rooms: Room[] = [
  {
    id: 1,
    name: "PS5 Room 1",
    price: 0,
    available: true,
    players: 4,
    members: 10,
    category: "Private couch gaming · up to 4 players",
    description:
      'A cozy private room with a PS5, a 65" 4K TV and soundbar. Perfect for FIFA nights and co-op sessions with friends.',
    image: [
      "/image/rooms/standard.jpg",
      "/image/rooms/standard-2.jpg",
      "/image/rooms/standard-3.jpg",
      "/image/rooms/standard-4.jpg",
    ],
    amenities: ["PS5", "Snacks", "AC", "65\" 4K TV", "Soundbar", "2 Controllers"],
    rules: [
      "Please arrive 10 minutes before your start time.",
      "No outside food or drinks — our snack bar has you covered.",
      "Handle controllers and equipment with care; damages are charged.",
      "Bookings are held for 15 minutes past start time.",
      "No smoking inside the rooms.",
    ],
  },
  {
    id: 2,
    name: "VIP Gaming Room",
    price: 0,
    available: true,
    players: 4,
    members: 10,
    category: "VIP private gaming · up to 4 players",
    description:
      "Enjoy a premium private gaming experience with a spacious lounge, high-end display and everything you need for a great gaming session.",
    image: [
      "/image/rooms/vip.jpg",
      "/image/rooms/vip-2.jpg",
      "/image/rooms/vip-3.jpg",
      "/image/rooms/vip-4.jpg",
    ],
    amenities: ["PS5", "Snacks", "AC", "65\" 4K TV", "Soundbar", "5 Controllers"],
    rules: [
      "Please arrive 10 minutes before your start time.",
      "No outside food or drinks — our snack bar has you covered.",
      "Handle controllers and equipment with care; damages are charged.",
      "Bookings are held for 15 minutes past start time.",
      "No smoking inside the rooms.",
    ],
  },
  {
    id: 3,
    name: "Cyber Zone",
    price: 0,
    available: false,
    players: 1,
    members: 4,
    category: "High-end PC gaming · individual setup",
    description:
      "A dedicated high-performance gaming setup for competitive gaming and immersive PC experiences.",
    image: [
      "/image/rooms/cyber.jpg",
      "/image/rooms/cyber-2.jpg",
      "/image/rooms/cyber-3.jpg",
      "/image/rooms/cyber-4.jpg",
    ],
    amenities: ["Gaming PC", "AC", "Gaming Monitor", "Headset"],
    rules: [
      "Please arrive 10 minutes before your start time.",
      "No outside food or drinks — our snack bar has you covered.",
      "Handle equipment with care; damages are charged.",
      "Bookings are held for 15 minutes past start time.",
      "No smoking inside the rooms.",
    ],
  },
];

const serviceFeeRate = 0; // Update when the actual service fee is decided.

function AmenityIcon({ name }: { name: string }) {
  if (name === "AC") return <Snowflake size={17} />;
  if (name.includes("TV")) return <Tv size={17} />;
  if (name.includes("PS") || name.includes("Controller"))
    return <Gamepad2 size={17} />;
  return <Monitor size={17} />;
}

export default function RoomBooking({ roomId }: { roomId: string }) {
  const room = rooms.find((item) => item.id === Number(roomId));

  const [activeImage, setActiveImage] = useState(0);
  const [sessionType, setSessionType] = useState<"normal" | "open">("normal");
  const [selectedDate, setSelectedDate] = useState("");
  const [players, setPlayers] = useState(2);
  const [startTime, setStartTime] = useState("");
  const [hours, setHours] = useState(2);

  if (!room) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Room not found</h1>
          <Link href="/" className="mt-4 inline-block underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = room.price * hours;
  const serviceFee = subtotal * serviceFeeRate;
  const total = subtotal + serviceFee;

  const today = new Date().toLocaleDateString("en-CA");

  const changePlayers = (amount: number) => {
    setPlayers((current) =>
      Math.min(room.players, Math.max(1, current + amount))
    );
  };

  const changeHours = (amount: number) => {
    setHours((current) => Math.min(12, Math.max(1, current + amount)));
  };

  const handleContinue = () => {
    if (!selectedDate || !startTime) {
      document.getElementById("start-time")?.focus();
      return;
    }

    alert("Booking availability will be connected to the database next.");
  };

  return (
    <main className="min-h-screen bg-[#f7f8f9]">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">

        {/* Back Link */}
        <Link
          href="/#rooms"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#66747d] transition hover:text-[#0b1a24]"
        >
          <ArrowLeft size={17} />
          Back to rooms
        </Link>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT: Booking Panel */}
          <section className="order-2 rounded-2xl border border-[#c2cbd1]/60 bg-white p-5 shadow-sm md:p-7 lg:order-1">

            {/* Price */}
            <div className="mb-7 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#0b1a24]">
                {room.price > 0 ? `EGP ${room.price}` : "EGP —"}
              </span>
              <span className="text-sm text-[#89969e]">/hr</span>
            </div>

            {/* Session Type */}
            <div className="mb-7 grid grid-cols-2 gap-2 rounded-xl bg-[#f0f2f3] p-1">
              <button
                onClick={() => setSessionType("normal")}
                className={`rounded-lg px-3 py-3 text-sm font-bold transition ${
                  sessionType === "normal"
                    ? "bg-white text-[#0b1a24] shadow-sm"
                    : "text-[#89969e] hover:text-[#0b1a24]"
                }`}
              >
                Normal
              </button>

              <button
                onClick={() => setSessionType("open")}
                className={`rounded-lg px-3 py-3 text-sm font-bold transition ${
                  sessionType === "open"
                    ? "bg-white text-[#0b1a24] shadow-sm"
                    : "text-[#89969e] hover:text-[#0b1a24]"
                }`}
              >
                Open session
              </button>
            </div>

            {/* Date and Players */}
            <div className="mb-7 grid grid-cols-2 gap-4">

              <div>
                <label
                  htmlFor="booking-date"
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-[#0b1a24]"
                >
                  <CalendarDays size={17} />
                  Date
                </label>

                <input
                  id="booking-date"
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full min-w-0 rounded-xl border border-[#c2cbd1] bg-white px-2 py-3 text-sm text-[#0b1a24] outline-none transition focus:border-[#f5c433] focus:ring-2 focus:ring-[#f5c433]/20"
                  style={{ colorScheme: "light", accentColor: "#f5c433" }}
                />
              </div>

              <div>
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#0b1a24]">
                  <Users size={17} />
                  Players
                </span>

                <div className="flex h-[46px] items-center justify-between rounded-xl border border-[#c2cbd1] px-2">
                  <button
                    onClick={() => changePlayers(-1)}
                    disabled={players <= 1}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f2f3] text-[#0b1a24] transition hover:bg-[#f5c433] disabled:opacity-30"
                    aria-label="Remove player"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="text-sm font-bold text-[#0b1a24]">
                    {players}
                  </span>

                  <button
                    onClick={() => changePlayers(1)}
                    disabled={players >= room.players}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f2f3] text-[#0b1a24] transition hover:bg-[#f5c433] disabled:opacity-30"
                    aria-label="Add player"
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-[#89969e]">
                  Max {room.players} players
                </p>
              </div>
            </div>

            {/* Start Time */}
            <div className="mb-7">
              <label
                htmlFor="start-time"
                className="mb-2 flex items-center gap-2 text-sm font-bold text-[#0b1a24]"
              >
                <Clock3 size={17} />
                Start time
              </label>

              <input
                id="start-time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full rounded-xl border border-[#c2cbd1] bg-white px-4 py-3 text-sm text-[#0b1a24] outline-none transition focus:border-[#f5c433] focus:ring-2 focus:ring-[#f5c433]/20"
                style={{ colorScheme: "light", accentColor: "#f5c433" }}
              />
            </div>

            {/* Duration */}
            <div className="mb-7">
              <span className="mb-3 block text-sm font-bold text-[#0b1a24]">
                Duration
              </span>

              <div className="flex items-center justify-between rounded-xl border border-[#c2cbd1] p-3">
                <span className="text-sm text-[#66747d]">Number of hours</span>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => changeHours(-1)}
                    disabled={hours <= 1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f2f3] text-[#0b1a24] transition hover:bg-[#f5c433] disabled:opacity-30"
                    aria-label="Decrease hours"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-12 text-center text-sm font-bold text-[#0b1a24]">
                    {hours} {hours === 1 ? "hour" : "hours"}
                  </span>

                  <button
                    onClick={() => changeHours(1)}
                    disabled={hours >= 12}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f2f3] text-[#0b1a24] transition hover:bg-[#f5c433] disabled:opacity-30"
                    aria-label="Increase hours"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-[#c2cbd1] pt-5">

              <div className="mb-3 flex justify-between text-sm">
                <span className="text-[#89969e]">
                  {room.price > 0
                    ? `EGP ${room.price} × ${hours} hours`
                    : "Room price × hours"}
                </span>
                <span className="font-semibold text-[#0b1a24]">
                  {room.price > 0 ? `EGP ${subtotal}` : "EGP —"}
                </span>
              </div>

              <div className="mb-5 flex justify-between text-sm">
                <span className="text-[#89969e]">Service fee</span>
                <span className="font-semibold text-[#0b1a24]">
                  {room.price > 0 ? `EGP ${serviceFee}` : "EGP —"}
                </span>
              </div>

              <div className="flex justify-between border-t border-[#c2cbd1] pt-5">
                <span className="font-bold text-[#0b1a24]">Total</span>
                <span className="text-xl font-extrabold text-[#0b1a24]">
                  {room.price > 0 ? `EGP ${total}` : "EGP —"}
                </span>
              </div>
            </div>

            {/* Continue */}
            <button
              onClick={handleContinue}
              disabled={!room.available}
              className="mt-7 w-full rounded-xl px-5 py-4 text-sm font-bold text-[#0b1a24] shadow-sm transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ backgroundColor: "#f5c433" }}
            >
              {room.available ? "Pick a start time" : "Currently unavailable"}
            </button>

            <p className="mt-3 text-center text-xs text-[#89969e]">
              No payment is collected at this stage.
            </p>
          </section>

          {/* RIGHT: Room Details */}
          <section className="order-1 min-w-0 lg:order-2">

            {/* Main Image */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#c2cbd1]">
              <Image
                src={room.image[activeImage]}
                alt={room.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition duration-500"
              />
            </div>

            {/* Image Gallery */}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {room.image.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition ${
                    activeImage === index
                      ? "border-[#f5c433]"
                      : "border-transparent hover:border-[#c2cbd1]"
                  }`}
                  aria-label={`View room image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${room.name} view ${index + 1}`}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Room Information */}
            <div className="mt-8">

              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-extrabold tracking-tight text-[#0b1a24] sm:text-3xl">
                  {room.name}
                </h1>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    room.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {room.available ? "Available" : "Unavailable"}
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold text-[#89969e]">
                {room.category}
              </p>

              <p className="text-sm leading-7 text-[#66747d]">
                {room.description}
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-9">
              <h2 className="mb-5 text-lg font-bold text-[#0b1a24]">
                What's included
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl border border-[#c2cbd1]/60 bg-white p-3"
                  >
                    <span className="text-[#d6a91d]">
                      <AmenityIcon name={amenity} />
                    </span>
                    <span className="text-xs font-semibold text-[#52616b]">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="mt-9 rounded-2xl border border-[#c2cbd1]/60 bg-white p-5 sm:p-6">
              <h2 className="mb-5 text-lg font-bold text-[#0b1a24]">
                House rules
              </h2>

              <div className="space-y-4">
                {room.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5c433]/20 text-[#b68b0e]">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <p className="text-sm leading-6 text-[#66747d]">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}
