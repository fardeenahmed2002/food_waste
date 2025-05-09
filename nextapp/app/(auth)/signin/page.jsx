import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function page() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/loginbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 w-[90%] max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl text-white flex flex-col items-center">
        <div className="mb-6">
          <Link href={'/'}>
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-[70px] h-[70px] rounded-full mx-auto"
            />
          </Link>

        </div>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="w-full px-4 py-2 mt-1 bg-white/20 text-white placeholder-white rounded-md border border-white/30 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-1 bg-white/20 text-white placeholder-white rounded-md border border-white/30 focus:outline-none"
            />
          </div>
          <div className="text-sm text-right">
            <a href="#" className="text-white/80 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center text-white/70">or continue with</div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-white/20 p-2 rounded-md hover:bg-white/30 flex items-center gap-2 text-white px-4">
            <FcGoogle className="text-xl" />
            Google
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-white/70">
          Don’t have an account?{" "}
          <a href="#" className="text-white underline">
            Register for free
          </a>
        </div>
      </div>
    </div>
  );
}
