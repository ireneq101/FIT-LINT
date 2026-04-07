import { useState } from "react";
import LogInModal from "./LogInModal";

export default function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

    const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowSignUp(false); // close sign up
    setShowLogin(true);   // open login
  };

  const openSignUp = () => {
    setShowLogin(false);  // close login
    setShowSignUp(true);  // open sign up
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // setIsOpen(false);
    openSignUp();
  };

  return (
    <div className="lg:flex items-center text-sm">

      {/* Open Modal Button */}
      <button
        onClick={() => setShowSignUp(true)}
        className="bg-[#000323] hover:bg-[#020736] lg:bg-[#4CAF50] lg:hover:bg-[#45a049] text-white px-6 py-2 rounded-lg transition-all"
      >
        SIGN UP
      </button>

      {/* Overlay */}
      {showSignUp && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowSignUp(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-[#111d3e] border border-green-500 rounded-2xl p-8 w-full max-w-md text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Create Account</h2>
              <button
                onClick={() => setShowSignUp(false)}
                className="text-gray-400 hover:text-white text-2xl leading-none cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-[#0a1128] border border-gray-600 focus:border-green-500 outline-none rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-[#0a1128] border border-gray-600 focus:border-green-500 outline-none rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-[#0a1128] border border-gray-600 focus:border-green-500 outline-none rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Confirm Password</label>
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-[#0a1128] border border-gray-600 focus:border-green-500 outline-none rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full mt-2 transition-colors cursor-pointer"
              >
                Create Account
              </button>

            </form>

            {/* Footer */}
            <p className="text-center text-gray-400 text-sm mt-4">
              Already have an account?{" "}
              <span onClick={openLogin} 
               className="text-green-400 hover:text-green-300 cursor-pointer">Log in</span>
            </p>

          </div>
        </div>
      )}

      {/* Login Modal */}
      <LogInModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

    </div>
  );
}
