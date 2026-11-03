
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Tv,
  Snowflake,
  Gamepad2,
  Monitor,
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "PS5 Standard Room",
    image: "/image/rooms/standard.jpg",
    available: true,
    players: 4,
    friends: 10,
    amenities: ["TV", "AC", "PS5", "2 Controllers"],
    price: "—",
  },
  {
    id: 2,
    name: "VIP Gaming Room",
    image: "/image/rooms/vip.jpg",
    available: true,
    players: 4,
    friends: 10,
    amenities: ["TV", "AC", "PS6", "5 Controllers"],
    price: "—",
  },
  {
    id: 3,
    name: "Cyber Zone",
    image: "/image/rooms/cyber.jpg",
    available: false,
    players: 1,
    friends: 4,
    amenities: ["PC", "AC", "High-End Setup"],
    price: "—",
  },
];

function AmenityIcon({ amenity }: { amenity: string }) {
  if (amenity === "TV") return <Tv size={15} />;
  if (amenity === "AC") return <Snowflake size={15} />;
  if (amenity.includes("Controller") || amenity.includes("PS"))
    return <Gamepad2 size={15} />;
  return <Monitor size={15} />;
}

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "#0b1a24" }}
          >
            Find Your Room
          </h2>

          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: "#89969e" }}
          >
            Pick a room to see details and book.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/rooms/${room.id}`}
              className="block"
            >
              <article
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
                style={{ border: "1px solid #c2cbd1" }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Availability */}
                  <div
                    className={`absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-sm ${
                      room.available ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        room.available ? "bg-green-200" : "bg-red-200"
                      }`}
                    />
                    {room.available ? "Available" : "Unavailable"}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5">

                  {/* Room Name and Price */}
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="text-lg font-bold leading-snug"
                      style={{ color: "#0b1a24" }}
                    >
                      {room.name}
                    </h3>

                    <div className="shrink-0 text-right">
                      <p
                        className="text-lg font-extrabold"
                        style={{ color: "#0b1a24" }}
                      >
                        EGP {room.price}
                      </p>
                      <span
                        className="text-xs"
                        style={{ color: "#89969e" }}
                      >
                        per hour
                      </span>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div
                    className="mt-5 flex items-center gap-6 border-b pb-4"
                    style={{ borderColor: "#c2cbd1" }}
                  >
                    <div className="flex items-center gap-2">
                      <Users size={17} style={{ color: "#89969e" }} />
                      <div>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "#0b1a24" }}
                        >
                          {room.players}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#89969e" }}
                        >
                          Players
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={17} style={{ color: "#89969e" }} />
                      <div>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "#0b1a24" }}
                        >
                          {room.friends}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#89969e" }}
                        >
                          Friends
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium"
                        style={{
                          backgroundColor: "#f3f5f6",
                          color: "#52616b",
                        }}
                      >
                        <AmenityIcon amenity={amenity} />
                        {amenity}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
