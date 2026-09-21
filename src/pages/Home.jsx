import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        <p className="text-blue-600 font-semibold mb-3">
          Welcome to ReactApp
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Multi-Page React Application
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Explore different pages using React Router and learn
          how navigation and dynamic routes work in React.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            About
          </Link>

          <Link
            to="/users"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            View Users
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Home;