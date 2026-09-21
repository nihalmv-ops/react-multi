import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">

      <div className="max-w-2xl text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-slate-900 mb-5">
          About This App
        </h1>

        <p className="text-slate-600 text-lg leading-8 mb-8">
          This application demonstrates how to create a
          multi-page React application using React Router.
          Users can navigate between pages and view individual
          user information through dynamic routes.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}

export default About;