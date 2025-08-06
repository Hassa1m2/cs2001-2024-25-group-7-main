import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Success!</h1>
        <p className="text-gray-700 mb-6">You have successfully signed up.</p>
        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Success;
