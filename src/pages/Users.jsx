import { Link } from "react-router-dom";
import users from "../data/user";

function Users() {
  return (
    <section className="min-h-screen px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Users
          </h1>

          <p className="text-slate-600">
            Select a user to view their details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {user.name.charAt(0)}
              </div>

              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {user.name}
              </h2>

              <p className="text-slate-500 mb-5">
                {user.email}
              </p>

              <Link
                to={`/users/${user.id}`}
                className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
