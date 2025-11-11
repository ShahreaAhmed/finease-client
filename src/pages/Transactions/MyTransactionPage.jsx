import React from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router";

const MyTransactionPage = () => {

  const data = useLoaderData()
  console.log(data)

  return (
    <div className="w-11/12 mx-auto py-10">
      <div
        className="bg-gradient-to-br from-[#2e1065] via-[#4338ca] to-[#1e1b4b]
        text-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        border border-indigo-700/40 px-10 py-8
        relative hover:scale-[1.01] transition-all duration-300"
      >
        <div className="absolute top-6 right-6">
          <span
            className="px-4 py-1 text-sm font-semibold rounded-full
            bg-red-600/20 text-red-300 border border-red-500/40
            shadow-sm backdrop-blur-sm"
          >
            Expense
          </span>
        </div>
        {/* Horizontal Info Section */}
        <div className="flex flex-wrap justify-between items-center text-gray-100 gap-y-6 mb-10">
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Type</span>
            <span className="text-2xl font-semibold">Expense</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Category</span>
            <span className="text-2xl font-semibold">Shopping</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Amount</span>
            <span className="text-3xl font-bold text-red-400">-$250</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Date</span>
            <span className="text-2xl font-semibold">Nov 10, 2025</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          {/* Bottom Left: Update */}
          <button className="flex items-center gap-2 border border-gray-500/60 text-gray-200 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white text-lg font-medium transition">
            <FaEdit size={18} /> Update
          </button>

          {/* Bottom Right: Delete + View Details */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-500/60 text-gray-200 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white text-lg font-medium transition">
              <FaTrashAlt size={18} /> Delete
            </button>

            <button className="flex items-center gap-2 border border-gray-500/60 text-gray-200 px-6 py-3 rounded-lg hover:bg-emerald-600 hover:text-white text-lg font-medium transition">
              <FaEye size={18} /> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactionPage;
