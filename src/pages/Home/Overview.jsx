// import React from 'react';
// import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

// const Overview = () => {
//   return (
//     <section className="relative py-16 bg-white text-gray-900 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center relative z-10 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
//           Financial Overview
//         </h2>
//         <p className="text-gray-600 mt-3 text-lg">
//           Get a quick summary of your financial health at a glance
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

//         {/* Total Balance Card */}
//         <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-40 bg-blue-100/20"></div>
//           <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4"><FaWallet className="text-blue-300 text-3xl" /></div>
//             <h3 className="font-semibold text-lg">Total Balance</h3>
//             <p className="text-4xl font-bold mt-2">$43,256.80</p>
//             <p className="mt-3 text-sm font-medium text-emerald-500">+4.2% from last month</p>
//           </div>
//         </div>

//         {/* Total Income Card */}
//         <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-40 bg-emerald-100/20"></div>
//           <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4"><FaArrowUp className="text-emerald-300 text-3xl" /></div>
//             <h3 className="font-semibold text-lg">Total Income</h3>
//             <p className="text-4xl font-bold mt-2">$12,560.00</p>
//             <p className="mt-3 text-sm font-medium text-emerald-500">+2.8% from last month</p>
//           </div>
//         </div>

//         {/* Total Expenses Card */}
//         <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-40 bg-rose-100/20"></div>
//           <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4"><FaArrowDown className="text-rose-300 text-3xl" /></div>
//             <h3 className="font-semibold text-lg">Total Expenses</h3>
//             <p className="text-4xl font-bold mt-2">$8,420.50</p>
//             <p className="mt-3 text-sm font-medium text-rose-500">-1.3% from last month</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Overview;









// import React, { useEffect, useState } from "react";
// import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

// const Overview = () => {
  
//   return (
//     <section className="relative py-16  text-white overflow-hidden">
//       {/* Soft Glow Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center relative z-10 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
//           Financial Overview
//         </h2>
//         <p className="text-gray-400 mt-3 text-lg">
//           Get a quick summary of your financial health at a glance
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
//         {/* Total Balance Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaWallet className="text-blue-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">
//               Total Balance
//             </h3>
//             <p className="text-4xl font-bold text-white mt-2">$43,256.80</p>
//             <p className="mt-3 text-sm font-medium text-emerald-400">
//               +4.2% from last month
//             </p>
//           </div>
//         </div>

//         {/* Total Income Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaArrowUp className="text-emerald-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">
//               Total Income
//             </h3>
//             <p className="text-4xl font-bold text-white mt-2">$12,560.00</p>
//             <p className="mt-3 text-sm font-medium text-emerald-400">
//               +2.8% from last month
//             </p>
//           </div>
//         </div>

//         {/* Total Expenses Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaArrowDown className="text-rose-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">
//               Total Expenses
//             </h3>
//             <p className="text-4xl font-bold text-white mt-2">$8,420.50</p>
//             <p className="mt-3 text-sm font-medium text-rose-400">
//               -1.3% from last month
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Overview;








// import React, { useEffect, useState } from "react";
// import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

// const Overview = ({ userEmail }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [totals, setTotals] = useState({
//     income: 0,
//     expense: 0,
//     balance: 0,
//   });

//   useEffect(() => {
//     if (!userEmail) return;

//     const fetchData = async () => {
//       try {
//         // Backend theke user email based data fetch
//         const res = await fetch(`http://localhost:4000/finease/user/${userEmail}`);
//         const data = await res.json();

//         const userData = data.data || []; // backend response structure

//         setTransactions(userData);

//         // Income total
//         const incomeTotal = userData
//           .filter(item => item.type === "Income")
//           .reduce((sum, item) => sum + Number(item.amount), 0);

//         // Expense total
//         const expenseTotal = userData
//           .filter(item => item.type === "Expense")
//           .reduce((sum, item) => sum + Number(item.amount), 0);

//         setTotals({
//           income: incomeTotal,
//           expense: expenseTotal,
//           balance: incomeTotal - expenseTotal,
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [userEmail]);

//   return (
//     <section className="relative py-16 text-white overflow-hidden">
//       {/* Soft Glow Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center relative z-10 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
//           Financial Overview
//         </h2>
//         <p className="text-gray-400 mt-3 text-lg">
//           Get a quick summary of your financial health at a glance
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
//         {/* Total Balance Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaWallet className="text-blue-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">Total Balance</h3>
//             <p className="text-4xl font-bold text-white mt-2">${totals.balance.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Total Income Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaArrowUp className="text-emerald-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">Total Income</h3>
//             <p className="text-4xl font-bold text-white mt-2">${totals.income.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Total Expenses Card */}
//         <div className="p-[1px] rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
//           <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <FaArrowDown className="text-rose-300 text-3xl" />
//             </div>
//             <h3 className="text-gray-300 font-semibold text-lg">Total Expenses</h3>
//             <p className="text-4xl font-bold text-white mt-2">${totals.expense.toFixed(2)}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Overview;









import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

// Example: currentUser object simulating logged-in user
const currentUser = {
  name: "Shahrea Ruman",
  email: "shahrearuman@gmail.com",
};

const Overview = () => {
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, balance: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/finease/user/${currentUser.email}`);
        const data = await res.json();
        const userData = data.data || [];

        setTransactions(userData);

        const incomeTotal = userData
          .filter(item => item.type === "Income")
          .reduce((sum, item) => sum + Number(item.amount), 0);

        const expenseTotal = userData
          .filter(item => item.type === "Expense")
          .reduce((sum, item) => sum + Number(item.amount), 0);

        setTotals({
          income: incomeTotal,
          expense: expenseTotal,
          balance: incomeTotal - expenseTotal,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative py-16 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="text-center relative z-10 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Financial Overview
        </h2>
        <p className="text-gray-400 mt-3 text-lg">Get a quick summary of your financial health at a glance</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Total Balance */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="mb-4"><FaWallet className="text-blue-300 text-3xl" /></div>
            <h3 className="text-gray-300 font-semibold text-lg">Total Balance</h3>
            <p className="text-4xl font-bold text-white mt-2">${totals.balance.toFixed(2)}</p>
          </div>
        </div>

        {/* Total Income */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="mb-4"><FaArrowUp className="text-emerald-300 text-3xl" /></div>
            <h3 className="text-gray-300 font-semibold text-lg">Total Income</h3>
            <p className="text-4xl font-bold text-white mt-2">${totals.income.toFixed(2)}</p>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="bg-[#0f172a]/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="mb-4"><FaArrowDown className="text-rose-300 text-3xl" /></div>
            <h3 className="text-gray-300 font-semibold text-lg">Total Expenses</h3>
            <p className="text-4xl font-bold text-white mt-2">${totals.expense.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
