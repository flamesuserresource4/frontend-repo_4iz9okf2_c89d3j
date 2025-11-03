import { MapPin, Sun, Waves } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-12 pb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
              <MapPin className="h-3.5 w-3.5" />
              Kish Island, Iran
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Explore Kish Island by Bike
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Cruise the palm-lined boulevards, stop by turquoise beaches, and feel the island breeze.
              Rent premium bicycles by the hour or day with instant booking and flexible pickup.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-medium shadow hover:bg-emerald-700 transition">
                Book your ride
              </a>
              <a href="#fleet" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50 transition">
                See our bikes
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold">Free helmets</div>
                <div className="text-slate-500">All sizes available</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold">24/7 support</div>
                <div className="text-slate-500">English & Persian</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold">Beachfront routes</div>
                <div className="text-slate-500">Curated maps</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-200 via-cyan-200 to-emerald-100">
                <div className="h-full w-full grid place-items-center text-emerald-900/80">
                  <div className="flex items-center gap-3 text-xl font-semibold">
                    <Sun className="h-6 w-6" />
                    Sunny rides, salty air
                    <Waves className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-600 text-sm">
                Pickups near coastal parks, Greek Ship, and Kish Boulevard. We bring the bike to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
