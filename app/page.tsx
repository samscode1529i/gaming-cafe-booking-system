
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "min(820px, calc(100svh - 68px))",
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(11, 26, 36, 0.98) 0%,
              rgba(11, 26, 36, 0.65) 40%,
              rgba(11, 26, 36, 0.05) 100%
            ),
            linear-gradient(
              to right,
              rgba(11, 26, 36, 0.85) 0%,
              rgba(11, 26, 36, 0.55) 45%,
              rgba(11, 26, 36, 0.05) 100%
            ),
            url('/image/hero.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className="h-0.5 w-8 rounded-full"
                style={{ backgroundColor: "#f5c433" }}
              />

              <span
                className="text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
                style={{ color: "#f5c433" }}
              >
                PlayStation & Cyber Cafe
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-extrabold leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
            >
              Your corner to play, chill &{" "}
              <span style={{ color: "#f5c433" }}>
                compete.
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "#c2cbd1" }}
            >
              Private PS5 rooms, a VIP lounge and a high-end Cyber Zone.
              Book by the hour or start an open session.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="#rooms"
                className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:brightness-110"
                style={{
                  backgroundColor: "#f5c433",
                  color: "#0b1a24",
                  boxShadow: "0 8px 25px rgba(245, 196, 51, 0.2)",
                }}
              >
                Browse Rooms
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
