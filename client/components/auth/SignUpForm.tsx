import Link from "next/link";

const SignUpForm = () => {
  return (
    <form className="space-y-5">
      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Nama Lengkap
        </label>
        <input
          type="text"
          placeholder="Nama kamu"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="bukuku@email.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Konfirmasi Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-accent hover:bg-accent-hover w-full rounded-xl py-2.5 text-sm font-semibold text-white transition"
      >
        Daftar
      </button>

      {/* Sign In link */}
      <p className="text-center text-sm text-gray-500">
        Sudah punya akun?{" "}
        <Link
          href="/sign-in"
          className="text-accent font-medium hover:underline"
        >
          Masuk
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
