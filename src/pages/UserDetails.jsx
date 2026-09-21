import { Link, useParams } from "react-router-dom";
import users from "../data/user";
function UserDetails() {
  const { id } = useParams();

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return (
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-bold text-red-500 mb-4">
            User Not Found
          </h1>

          <p className="text-slate-600 mb-6">
            The user you are looking for does not exist.
          </p>

          <Link
            to="/users"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Back to Users
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-80px)] px-6 py-12">

      <div className="mx-auto max-w-2xl">

        <div className="mb-8">
          <Link
            to="/users"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Users
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          {/* User Avatar */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
            {user.name.charAt(0)}
          </div>

          <div className="text-center">

            <h1 className="mb-2 text-3xl font-bold text-slate-900">
              {user.name}
            </h1>

            <p className="mb-8 text-slate-500">
              User ID: {user.id}
            </p>

          </div>

          {/* User Information */}
          <div className="space-y-4">

            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Email
              </p>

              <p className="font-medium text-slate-900">
                {user.email}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Phone
              </p>

              <p className="font-medium text-slate-900">
                {user.phone}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                City
              </p>

              <p className="font-medium text-slate-900">
                {user.city}
              </p>
            </div>

          </div>

          <Link
            to="/users"
            className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Go Back to Users
          </Link>

        </div>

      </div>

    </section>
  );
}

export default UserDetails;