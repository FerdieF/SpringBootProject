import Link from "next/link";

const SignInForm = () => {
  return (
    <form className="space-y-5">
      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="bukuku@email.com"
          className="focus:accent w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
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
          className="focus:accent w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Forgot password */}
      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-accent text-sm hover:underline"
        >
          Lupa password?
        </Link>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-accent hover:bg-accent-hover w-full rounded-xl py-2.5 text-sm font-semibold text-white transition"
      >
        Masuk
      </button>

      {/* Sign Up link */}
      <p className="text-center text-sm text-gray-500">
        Belum punya akun?{" "}
        <Link
          href="/sign-up"
          className="text-accent font-medium hover:underline"
        >
          Daftar
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
