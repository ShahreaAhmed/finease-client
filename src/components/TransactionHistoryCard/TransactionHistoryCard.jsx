import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TransactionHistoryCard = ({transaction, onDelete}) => {
    const {type, category, amount, date, _id} = transaction;

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    const handleDelete = () => {
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {


    fetch(`http://localhost:4000/finease/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    onDelete(_id)
          })
          .catch((error) => {
            console.log(error);
          });

    
  }
});
    }
    return (
        <div className="w-11/12 mx-auto py-3">
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
            {type}
          </span>
        </div>
        {/* Horizontal Info Section */}
        <div className="flex flex-wrap justify-between items-center text-gray-100 gap-y-6 mt-3 mb-10">
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Type</span>
            <span className="text-2xl font-semibold">{type}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Category</span>
            <span className="text-2xl font-semibold">{category}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Amount</span>
            <span className="text-3xl font-bold text-red-400">${amount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-base tracking-wide">Date</span>
            <span className="text-2xl font-semibold">{formattedDate}</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center">
          <Link to={`/update-transaction/${_id}`} className="flex items-center gap-2 border border-gray-500/60 text-gray-200 md:px-6 px-3 py-3 md:py-3 rounded-lg hover:bg-blue-600 hover:text-white md:text-lg font-medium transition">
            <FaEdit size={18} /> Update
          </Link>

          {/* Button Delete and View Details */}
          <div className="flex md:gap-4 gap-2 ml-2">
            <button  onClick={handleDelete} className="flex items-center gap-2 border border-gray-500/60 text-gray-200 md:px-6 md:py-3 px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white md:text-lg font-medium transition">
              <FaTrashAlt size={18} /> Delete
            </button>

            <Link to={`/transaction-details/${_id}`} className="flex items-center gap-2 border border-gray-500/60 text-gray-200 md:px-6 md:py-3 px-3 py-0 rounded-lg hover:bg-emerald-600 hover:text-white md:text-lg font-medium transition">
              <FaEye size={18} /> View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TransactionHistoryCard;