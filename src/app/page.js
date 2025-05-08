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
    <div className="login-container"> {/* Apply CSS class from globals.css */}
      <h1 className="login-title">Student Login</h1>
      <div className="login-underline" />

      {error && <p className="login-error">{error}</p>} {/* Display error message */}

      <div className="login-form">
        <div className="login-inputWrapper">
          <Input
            type="email"
            placeholder="Email Account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="login-inputWrapper">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="login-forgotPassword">
          <a href="#">Forgot Password? Click Here!</a>
        </div>
      </div>

      <div className="login-buttonGroup">
        <Button variant="outline" className="signup-button" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Button className="login-Button" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
