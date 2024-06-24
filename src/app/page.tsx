import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function HomePage() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        {" "}
        <FloatingNav navItems={navItems} />
        <Hero />{" "}
        <Grid/>
      </div>
    </main>
  );
}
