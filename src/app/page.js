"use client";
import "./globals.css";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();

  // Validate email using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login logic
  const handleLogin = async () => {
    setError(""); // Reset error on each submit

    // Validate email
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      // Simulate API call or backend validation here
      const isLoginSuccessful = true; // Replace with actual login API call
      if (isLoginSuccessful) {
        router.push("/app/dashboard"); // Navigate to dashboard after successful login
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    }
  };

  // Handle signup redirection
  const handleSignUp = () => {
    router.push("/signup"); // Redirect to sign-up page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/app/instagang.jpg" // Replace with your image path
            alt="Showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-black">InstaGang</h1>
            {error && (
              <p className="mb-4 text-red-500 text-center">{error}</p>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                placeholder="Phone number, username, or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input placeholder:text-black placeholder:opacity-70"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input placeholder:text-black placeholder:opacity-70"
              />
            </div>
            <Button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={handleLogin}
            >
              Log in
            </Button>
            <div className="text-center my-4 text-gray-500">OR</div>
            <Button
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              Log in with Facebook
            </Button>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
            </div>
            <div className="text-center mt-6 text-gray-500">
              Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
