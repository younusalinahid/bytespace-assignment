import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
    return (
        <AuthLayout
            heading="Sign in with ease"
            subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        >
            <span className="text-sm font-medium text-blue-600">Sign In</span>
            <h1 className="mt-1 font-heading text-3xl font-bold text-gray-900">
                Welcome Back
            </h1>

            <form className="mt-8 flex flex-col gap-5">
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
                    Sign In
                </button>
            </form>

            <div className="my-6 flex items-center gap-4 text-xs text-gray-400">
                <div className="h-px flex-1 bg-gray-200" />
                or
                <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="flex justify-center gap-4">
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200">
                    f
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200">
                    G
                </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
                New user?{" "}
                <Link to="/register" className="font-medium text-blue-600">
                    Create an account
                </Link>
            </p>
        </AuthLayout>
    );
}