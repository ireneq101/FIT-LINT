import { useState } from "react";

const LogInModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111d3e] border border-green-500 rounded-2xl p-8 w-full max-w-md text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl cursor-pointer">
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full mt-2 transition-colors cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don't have an account?{" "}
          <span onClick={onClose} className="text-green-400 hover:text-green-300 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogInModal;