import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-6 px-4">
        <h1 className="text-2xl flex justify-center items-center font-bold">
          Welcome to the Homepage
        </h1>
      </header>
      <main className="container mx-auto p-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">
            Please{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>{" "}
            to continue
          </p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-3 px-4 mt-auto">
        <p className="text-center">&copy; 2022 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
