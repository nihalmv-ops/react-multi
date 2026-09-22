import { Link } from "react-router-dom";
import { Compass, Users, Layers } from "lucide-react";

function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50/50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] flex flex-col items-center justify-center py-16">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-12 left-1/2 -z-10 h-[480px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-200/40 via-indigo-100/40 to-sky-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 text-center w-full">

        <div className="mx-auto max-w-3xl flex flex-col items-center">

          {/* Top Badge */}
          <div className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:shadow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span>React Router Application</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Modern{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              React Applications
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            A multi-page React application demonstrating navigation, routing, dynamic routes, and reusable components with React Router.
          </p>

          {/* Centered Buttons */}
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/users"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Explore Users</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-8 py-4 font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Learn More
            </Link>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-8 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/25">
              <Compass className="h-7 w-7 transition-colors" />
            </div>
            <h2 className="mb-3 text-xl font-bold tracking-tight text-slate-900">React Router</h2>
            <p className="leading-relaxed text-slate-600">
              Navigate between different pages without refreshing the browser.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-8 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-500/25">
              <Users className="h-7 w-7 transition-colors" />
            </div>
            <h2 className="mb-3 text-xl font-bold tracking-tight text-slate-900">User Profiles</h2>
            <p className="leading-relaxed text-slate-600">
              Browse users and open individual profiles using dynamic URL parameters.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-8 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-purple-500/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-500/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-500/25">
              <Layers className="h-7 w-7 transition-colors" />
            </div>
            <h2 className="mb-3 text-xl font-bold tracking-tight text-slate-900">Reusable Components</h2>
            <p className="leading-relaxed text-slate-600">
              Build clean React applications using reusable components and organized folders.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;