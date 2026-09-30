import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
    return (
        <AuthLayout
            heading="Sign up and come in"
            subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
        >
      <span className="text-sm font-medium text-blue-600">
        Create an Account
      </span>
            <h1 className="mt-1 font-heading text-3xl font-bold text-gray-900">
                Welcome to ByteSpace
            </h1>

            <form className="mt-8 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Jamie Davis"
                        className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="designer@example.com"
                        className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 self-end rounded-full bg-electric-lime px-8 py-3 text-sm font-semibold text-gray-900"
                >
                    Continue
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-blue-600">
                    Login
                </Link>
            </p>
        </AuthLayout>
    );
}