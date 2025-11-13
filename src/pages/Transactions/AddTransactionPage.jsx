import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const AddTransactionPage = () => {
  const handleAddTransactionSubmit = (event) => {
    event.preventDefault();

    const formData = {
      type: event.target.type.value,
      category: event.target.category.value,
      amount: Number(event.target.amount.value),
      description: event.target.description.value,
      date: new Date(event.target.date.value),
      email: event.target.email.value,
      name: event.target.name.value,
    };
    console.log(formData);

    fetch("http://localhost:4000/finease", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Transaction history added successfully!");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add transaction. Please try again.");
      });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-between items-center">
        Add Transaction
        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-600/20 text-red-600 border border-red-500/40 shadow-sm backdrop-blur-sm">
          FinEase
        </span>
      </h2>

      <form onSubmit={handleAddTransactionSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            defaultValue={""}
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
            defaultValue={""}
            name="category"
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2 cursor-pointer"
          >
            <option value="" disabled>
              Select category
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
            name="amount"
            required
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
            name="description"
            required
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
            name="date"
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* User Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={auth.currentUser.displayName}
            readOnly
            className="w-full border-gray-300 rounded-lg bg-gray-100 text-gray-700 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={auth.currentUser.email}
            readOnly
            className="w-full border-gray-300 rounded-lg bg-gray-100 text-gray-700 p-2"
          />
        </div>

        {/* Add Transaction Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionPage;
