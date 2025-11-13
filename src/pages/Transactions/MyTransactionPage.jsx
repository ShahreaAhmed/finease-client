
import React, { useState, useEffect, useContext } from "react";
import TransactionHistoryCard from "../../components/TransactionHistoryCard/TransactionHistoryCard";
import { AuthContext } from "../../context/AuthContext";

const MyTransactionPage = () => {
  const { user } = useContext(AuthContext); 
  const [transactions, setTransactions] = useState([]);
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user?.email) return; // wait for user to load

      try {
        const res = await fetch(
          `http://localhost:4000/finease/user/${user.email}?sortBy=${sortField}&order=${sortOrder}`
        );
        const data = await res.json();
        console.log("Backend response:", data); // debug
        setTransactions(data.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
  }, [user, sortField, sortOrder]);

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold mb-6">Transaction History</div>

      {/* Sort Controls */}
      <div className="flex justify-center gap-4 mb-6">
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <div>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionHistoryCard
              transaction={transaction}
              key={transaction._id}
              onDelete={handleDeleteTransaction}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10 text-lg">No transaction found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTransactionPage;

