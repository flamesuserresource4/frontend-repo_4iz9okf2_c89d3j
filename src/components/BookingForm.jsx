import { useState } from "react";
import { Calendar, Clock, Bike, User, Phone } from "lucide-react";

const bikeOptions = [
  { value: "city", label: "City Cruiser" },
  { value: "mountain", label: "Mountain Trail" },
  { value: "ebike", label: "E-Bike Breeze" },
  { value: "kids", label: "Kids Fun" },
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    bike: "city",
    hours: 2,
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "hours" ? Number(value) : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      setMessage("Please fill in all required details.");
      return;
    }
    const human = `${form.name} booked a ${bikeOptions.find(b=>b.value===form.bike)?.label} for ${form.hours} hour(s) on ${form.date} at ${form.time}.`;
    setMessage(`Request received! ${human} We will confirm by phone shortly.`);
  }

  return (
    <section id="booking" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Book your bike</h2>
            <p className="mt-2 text-slate-600">Instant requests. Pay on pickup. Free cancellations up to 1 hour before.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2"><Bike className="h-4 w-4 text-emerald-600" /> Premium, well‑maintained bikes</li>
              <li className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-emerald-600" /> Daily and hourly rates</li>
              <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-600" /> Flexible pickup & returns</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Full name</span>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sara Rahimi"
                    className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone number</span>
                <div className="mt-1 relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. +98 912 123 4567"
                    className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Date</span>
                <div className="mt-1 relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Time</span>
                <div className="mt-1 relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Bike type</span>
                <select
                  name="bike"
                  value={form.bike}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {bikeOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Duration (hours)</span>
                <input
                  type="number"
                  min={1}
                  max={12}
                  name="hours"
                  value={form.hours}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </label>
            </div>

            <button type="submit" className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-3 text-white font-medium shadow hover:bg-emerald-700 transition">
              Request booking
            </button>

            {message && (
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-800 text-sm">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
