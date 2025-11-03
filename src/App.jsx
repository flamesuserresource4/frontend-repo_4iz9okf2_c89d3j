import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import BookingForm from "./components/BookingForm";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} KishBike — Enjoy the ride on Kish Island.
        </p>
        <p>
          Open daily • 8:00–22:00 • English | فارسی
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
