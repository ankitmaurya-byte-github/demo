import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper";

// Define a type for component props
type Props = {};

const Login: React.FC<Props> = () => {
  // State variables for form data and error handling
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Reset error if validation passes
    setError("");

    // Add login logic here (e.g., API call)
    console.log("Login submitted:", { email, password });
  };

  return (
    <ContentWrapper>
      <div className="absolute inset-0 h-full w-full bg-purple-800 -z-10"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md  rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Login;
