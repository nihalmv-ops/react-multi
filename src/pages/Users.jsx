import { Link } from "react-router-dom";
import users from "../data/user";

function Users() {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold text-blue-600">
            Our Community
          </p>

          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Users
          </h1>

          <p className="mx-auto max-w-xl text-slate-600">
            Browse our users and select any profile to view
            their complete information.
          </p>
        </div>

        {/* User Count */}
        <div className="mb-8 rounded-xl bg-blue-50 p-4 text-center">
          <p className="font-medium text-blue-700">
            Total Users: {users.length}
          </p>
        </div>

        {/* User Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {users.map((user) => (
            <div
              key={user.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Avatar */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {user.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="mb-2 text-center text-xl font-bold text-slate-900">
                {user.name}
              </h2>

              {/* Email */}
              <p className="mb-1 truncate text-center text-sm text-slate-500">
                {user.email}
              </p>

              {/* City */}
              <p className="mb-6 text-center text-sm text-slate-500">
                📍 {user.city}
              </p>

              {/* Details Button */}
              <Link
                to={`/users/${user.id}`}
                className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                View Details
              </Link>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Users;