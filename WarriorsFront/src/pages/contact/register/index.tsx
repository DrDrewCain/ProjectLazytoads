import React, { useState } from 'react';
import Navigation from "../../../app/components/Navigation";
import RootLayout from "../../../app/layout";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, such as making an API request to verify credentials
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-teal-500 to-purple-500">
          <Navigation />
        </header>

        <main className="bg-gray-100 flex-1 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700 font-bold mb-2">Email</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-black bg-gray-100"
                  placeholder="johndoe@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold mb-2">Password</span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-black bg-gray-100"
                  placeholder="********"
                />
              </label>
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
              >
                Login
              </button>
            </form>
          </div>
        </main>
      </div>
    </RootLayout>
  );
};

export default Login;