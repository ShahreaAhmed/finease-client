import React, { useEffect, useState, useContext } from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext"; 

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [totals, setTotals] = useState({ income: 0, expense: 0, balance: 0 });

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/finease/user/${user.email}`);
        const data = await res.json();
        const userData = data.data || [];

        const incomeTotal = userData
          .filter((item) => item.type === "Income")
          .reduce((sum, item) => sum + Number(item.amount), 0);

        const expenseTotal = userData
          .filter((item) => item.type === "Expense")
          .reduce((sum, item) => sum + Number(item.amount), 0);

        const balance = Math.max(0, incomeTotal - expenseTotal);

        setTotals({ income: incomeTotal, expense: expenseTotal, balance });
      } catch (err) {
        console.error("Error fetching overview data:", err);
      }
    };

    fetchData();
  }, [user]);

  return (
    <section className="relative py-16 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Financial Overview
        </h2>
        <p className="text-gray-400 mt-3">Your personalized finance summary</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {/* Balance */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-[#0f172a]/90 rounded-2xl p-6 flex flex-col items-center text-center">
            <FaWallet className="text-blue-300 text-3xl mb-2" />
            <h3 className="text-gray-300 font-semibold">Total Balance</h3>
            <p className="text-4xl font-bold text-white mt-2">
              ${totals.balance.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Income */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-[#0f172a]/90 rounded-2xl p-6 flex flex-col items-center text-center">
            <FaArrowUp className="text-emerald-300 text-3xl mb-2" />
            <h3 className="text-gray-300 font-semibold">Total Income</h3>
            <p className="text-4xl font-bold text-white mt-2">
              ${totals.income.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Expense */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-[#0f172a]/90 rounded-2xl p-6 flex flex-col items-center text-center">
            <FaArrowDown className="text-rose-300 text-3xl mb-2" />
            <h3 className="text-gray-300 font-semibold">Total Expenses</h3>
            <p className="text-4xl font-bold text-white mt-2">
              ${totals.expense.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
