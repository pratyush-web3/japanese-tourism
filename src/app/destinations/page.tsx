import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function DestinationsIndexPage() {
  return (
    <main className="bg-jp-cream text-jp-charcoal">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-jp-sakura/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-jp-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-jp-red md:text-sm">
            JAPAN DESTINATIONS
          </p>

          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            旅の目的地を選ぶ
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-jp-charcoal/75 md:text-lg">
            京都、富士・箱根、北海道。それぞれの土地が持つ静けさと美しさを、
            ひとつずつ丁寧に巡れるようにまとめました。
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative block h-130 overflow-hidden rounded-4xl bg-jp-charcoal"
              >
                <Image
                  src={destination.heroImage}
                  alt={destination.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-8">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-jp-sakura/80">
                      {destination.subtitle}
                    </p>

                    <h2 className="font-display text-3xl font-bold text-white">
                      {destination.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/75">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}