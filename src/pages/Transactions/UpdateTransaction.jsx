import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateTransaction = () => {
  const data = useLoaderData();
  const transaction = data.result;

  const navigate = useNavigate()
  
  const handleUpdateTransactionSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        type: event.target.type.value,
        category: event.target.category.value,
        amount: Number(event.target.amount.value),
        description: event.target.description.value,
        date: new Date(event.target.date.value),
      };
      console.log(formData);
  
      fetch(`http://localhost:4000/finease/${transaction._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Transaction history update successfully!");
          navigate(`/transaction-details/${transaction._id}`)
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to update transaction. Please try again.");
        });
    };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-between items-center">
        Update Transaction
        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-600/20 text-red-600 border border-red-500/40 shadow-sm backdrop-blur-sm">
          FinEase
        </span>
      </h2>

      <form onSubmit={handleUpdateTransactionSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            defaultValue={transaction.type}
            name="type"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2 cursor-pointer"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            defaultValue={transaction.category}
            name="category"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2 cursor-pointer"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option>Salary</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            defaultValue={transaction.amount}
            name="amount"
            placeholder="Enter amount"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Optional description"
            defaultValue={transaction.description}
            name="description"
            rows={2}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            defaultValue= {new Date(transaction.date).toISOString().split("T")[0]}
            name="date"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* Add Transaction Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTransaction;
