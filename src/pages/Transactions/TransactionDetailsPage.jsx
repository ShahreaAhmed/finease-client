// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";

// const TransactionDetails = () => {
//   const data = useLoaderData();
//   const transaction = data.result
//     console.log(transaction);

//   const [totalCategoryAmount, setTotalCategoryAmount] = useState(0);

//   useEffect(() => {
//     if (transaction?.category) {
//       fetch("http://localhost:4000/finease") 
//         .then((res) => res.json())
//         .then((allData) => {

//           const sameCategory = allData.filter(
//             (item) => item.category === transaction.category
//           );

//           const total = sameCategory.reduce(
//             (sum, item) => sum + Number(item.amount || 0),
//             0
//           );

//           setTotalCategoryAmount(total);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [transaction?.category]);

//   console.log(transaction);
  

//   return (
    

//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
//       <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_60px_-15px_rgba(255,0,150,0.4)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(255,0,150,0.6)]">
        
//         {/* Header */}
//         <div className="flex items-center justify-between bg-gradient-to-r from-fuchsia-600/30 to-purple-700/20 px-8 py-6 border-b border-white/10">
//           <h2 className="text-3xl font-bold text-white tracking-wide">
//             Transaction Details
//           </h2>
//           <span
//             className={`px-5 py-2 text-sm font-semibold rounded-full border shadow-md ${
//               transaction.type === "Income"
//                 ? "bg-green-500/30 text-green-300 border-green-400/40"
//                 : "bg-red-500/30 text-red-300 border-red-400/40"
//             }`}
//           >
//             {transaction.type}
//           </span>
//         </div>

//         {/* Main Content */}
//         <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-200">

//           {/* Type */}
//           <div className="space-y-2">
//             <p className="text-sm text-gray-400 uppercase tracking-wider">
//               Type
//             </p>
//             <p
//               className={`font-semibold text-lg ${
//                 transaction.type === "Income"
//                   ? "text-green-400"
//                   : "text-red-400"
//               }`}
//             >
//               {transaction.type}
//             </p>
//           </div>

//           {/* Category */}
//           <div className="space-y-2">
//             <p className="text-sm text-gray-400 uppercase tracking-wider">
//               Category
//             </p>
//             <p className="font-semibold text-pink-400 text-lg">
//               {transaction.category}
//             </p>
//           </div>

//           {/* Description */}
//           <div className="space-y-2">
//             <p className="text-sm text-gray-400 uppercase tracking-wider">
//               Description
//             </p>
//             <p className="font-semibold text-white leading-relaxed break-words">
//               {transaction.description}
//             </p>
//           </div>

//           {/* Date */}
//           <div className="space-y-2">
//             <p className="text-sm text-gray-400 uppercase tracking-wider">
//               Date
//             </p>
//             <p className="text-white font-medium text-lg">
//               {new Date(transaction.date).toLocaleDateString("en-GB", {
//                 year: "numeric",
//                 month: "short",
//                 day: "numeric",
//               })}
//             </p>
//           </div>

//           {/* Amount */}
//           <div className="space-y-2">
//             <p className="text-sm text-gray-400 uppercase tracking-wider">
//               Amount
//             </p>
//             <p
//               className={`font-bold text-2xl ${
//                 transaction.type === "Income"
//                   ? "text-green-400"
//                   : "text-red-400"
//               }`}
//             >
//               ${transaction.amount}
//             </p>
//           </div>
//         </div>

//         {/* Divider line */}
//         <div className="border-t border-white/10"></div>

//         {/* 🔹 এখানে আমরা হিসাব করা মোট ক্যাটাগরি amount দেখাবো */}
//         <div className="flex items-center justify-between px-8 py-6 text-gray-200 text-lg">
//           <p className="text-gray-400 font-medium">Total in Category</p>
//           <p className="text-pink-400 font-bold text-2xl">
//             ${totalCategoryAmount}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionDetails;







import React, { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const TransactionDetails = () => {
  const data = useLoaderData();
  const transaction = data.result;

  const { user } = useContext(AuthContext); // logged-in user
  const [totalCategoryAmount, setTotalCategoryAmount] = useState(0);

  useEffect(() => {
    if (transaction?.category && user?.email) {
      fetch(
        `http://localhost:4000/finease/user/${user.email}/category-total/${transaction.category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTotalCategoryAmount(data.totalAmount || 0);
        })
        .catch((err) => console.error(err));
    }
  }, [transaction?.category, user?.email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_60px_-15px_rgba(255,0,150,0.4)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(255,0,150,0.6)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-fuchsia-600/30 to-purple-700/20 px-8 py-6 border-b border-white/10">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Transaction Details
          </h2>
          <span
            className={`px-5 py-2 text-sm font-semibold rounded-full border shadow-md ${
              transaction.type === "Income"
                ? "bg-green-500/30 text-green-300 border-green-400/40"
                : "bg-red-500/30 text-red-300 border-red-400/40"
            }`}
          >
            {transaction.type}
          </span>
        </div>

        {/* Main Content */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-200">
          <div className="space-y-2">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Type</p>
            <p className={`font-semibold text-lg ${transaction.type === "Income" ? "text-green-400" : "text-red-400"}`}>
              {transaction.type}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Category</p>
            <p className="font-semibold text-pink-400 text-lg">{transaction.category}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Amount</p>
            <p className={`font-bold text-2xl ${transaction.type === "Income" ? "text-green-400" : "text-red-400"}`}>
              ${transaction.amount}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Date</p>
            <p className="text-white font-medium text-lg">
              {new Date(transaction.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Total in Category */}
        <div className="flex items-center justify-between px-8 py-6 text-gray-200 text-lg">
          <p className="text-gray-400 font-medium">Total in Category</p>
          <p className="text-pink-400 font-bold text-2xl">${totalCategoryAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
