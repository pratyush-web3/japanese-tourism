import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { TravelExperience } from "@/components/TravelExperience";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-jp-cream">
      <Hero />
      <FeaturedDestinations />
      <TravelExperience />
      <Testimonials />
    </main>
  );
}