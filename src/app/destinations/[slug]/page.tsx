import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return notFound();
  }

  return (
    <main className="bg-jp-cream text-jp-charcoal overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Hero Image */}
        <Image
          src={destination.heroImage}
          alt={destination.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-jp-sakura md:text-sm">
              JAPAN DESTINATION
            </p>

            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl xl:text-8xl">
              {destination.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {destination.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-jp-cream px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-jp-red">
              EXPERIENCE
            </p>

            {/* Heading */}
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              日本の美しさを
              <br />
              深く味わう
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-9 text-jp-charcoal/75">
              {destination.longDescription}
            </p>

            {/* Highlights */}
            <div className="mt-14">
              <h3 className="mb-8 font-display text-2xl font-bold">
                見どころ
              </h3>

              <div className="flex flex-wrap gap-4">
                {destination.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-jp-sakura/20 px-5 py-3 text-sm font-medium text-jp-charcoal"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Gallery */}
          <div className="space-y-6">
            {destination.gallery.map((img, index) => (
              <div
                key={index}
                className="relative h-[320px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={img}
                  alt={`${destination.title} gallery image`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}