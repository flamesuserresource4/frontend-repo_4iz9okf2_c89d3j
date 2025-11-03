import { Bike, Clock, Gauge } from "lucide-react";

const bikes = [
  {
    id: 1,
    name: "City Cruiser",
    desc: "Comfortable step-through ideal for seaside boulevards.",
    price: "$6/hr",
    specs: ["7-speed", "Comfort saddle", "Basket"],
    color: "from-emerald-200 to-emerald-100",
  },
  {
    id: 2,
    name: "Mountain Trail",
    desc: "Sturdy gears for longer island loops and dunes.",
    price: "$8/hr",
    specs: ["21-speed", "Front suspension", "Disc brakes"],
    color: "from-cyan-200 to-cyan-100",
  },
  {
    id: 3,
    name: "E-Bike Breeze",
    desc: "Effortless cruising with pedal assist and range for a day.",
    price: "$12/hr",
    specs: ["Pedal assist", "40km range", "LED lights"],
    color: "from-amber-200 to-amber-100",
  },
  {
    id: 4,
    name: "Kids Fun",
    desc: "Smaller frames with safety gear included.",
    price: "$4/hr",
    specs: ["Bell", "Training wheels (opt)", "Helmet"],
    color: "from-pink-200 to-pink-100",
  },
];

function BikeCard({ name, desc, price, specs, color }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br ${color} grid place-items-center text-slate-800`}> 
        <Bike className="h-12 w-12 opacity-80" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1 text-slate-600 text-sm">{desc}</p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">{price}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
        {specs.map((s) => (
          <li key={s} className="rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50">{s}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Flexible hours</span>
        <span className="inline-flex items-center gap-1"><Gauge className="h-3.5 w-3.5" /> Easy pickup</span>
      </div>
    </div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Fleet</h2>
            <p className="mt-2 text-slate-600">Curated bikes for every kind of island adventure.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((b) => (
            <BikeCard key={b.id} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
