import { Bike, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Bike className="h-5 w-5" />
            </span>
            <span className="text-lg">KishBike</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fleet" className="text-slate-600 hover:text-slate-900 transition">Bikes</a>
            <a href="#booking" className="text-slate-600 hover:text-slate-900 transition">Book</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </nav>

          <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition">
            <MapPin className="h-4 w-4" />
            <span>Rent in Kish</span>
          </a>
        </div>
      </div>
    </header>
  );
}
