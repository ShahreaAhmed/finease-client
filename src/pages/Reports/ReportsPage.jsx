
// import React, { use, useEffect, useState } from "react";
// import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar, Cell } from "recharts";
// // import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
// import { AuthContext } from "../../context/AuthContext";


// const ReportsPage = () => {
//   const { user } = use(AuthContext);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#facc15", "#a78bfa", "#fb923c"];


//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:3000/my-transaction?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setTransactions(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//           setLoading(false);
//         });
//     }
//   }, [user]);

//   if(loading){
//     // return <LoadingSpinner/>
//   }

//   // pie chart
//   const categoryTotals = transactions.reduce((accu, transaction) => {
//     accu[transaction.category] =
//       (accu[transaction.category] || 0) + Number(transaction.amount);
//     return accu;
//   }, {});
//   const pieData = Object.keys(categoryTotals).map((cate) => ({
//     name: cate,
//     value: categoryTotals[cate],
//   }));

//   // bar chart
//   const monthlyTotals = transactions.reduce((accu, transacton) => {
//     const month = new Date(transacton.date).toLocaleString("default", {
//       month: "short",
//     });
//     accu[month] = (accu[month] || 0) + Number(transacton.amount);
//     return accu;
//   }, {});
//   const barData = Object.keys(monthlyTotals).map((m) => ({
//     month: m,
//     total: monthlyTotals[m],
//   }));

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Reports Summary
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Pie Chart for Categories */}
//         <div className="card bg-base-100 shadow-xl p-5 border">
//           <h3 className="text-xl font-semibold text-center mb-4">
//             Category-wise Distribution
//           </h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={120}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({ name, value }) => `${name} (${value})`}
//               >
//                 {pieData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart for Monthly Totals */}
//         <div className="card bg-base-100 shadow-xl p-5 border">
//           <h3 className="text-xl font-semibold text-center mb-4">
//             Monthly Totals
//           </h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={barData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="total" fill="#60a5fa" radius={[5, 5, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;









import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

const ReportsPage = () => {
  const { user } = useContext(AuthContext);
  const [categoryData, setCategoryData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    // Category-wise summary
    fetch(`http://localhost:4000/finease/user/${user.email}/category-summary`)
      .then((res) => res.json())
      .then((data) => {
        const chartData = Object.entries(data.categorySummary || {}).map(([key, value]) => ({
          name: key,
          value,
        }));
        setCategoryData(chartData);
      })
      .catch((err) => console.error(err));

    // Month-wise summary
    fetch(`http://localhost:4000/finease/user/${user.email}/monthly-summary`)
      .then((res) => res.json())
      .then((data) => {
        const chartData = Object.entries(data.monthlySummary || {}).map(([month, total]) => ({
          month,
          total,
        }));
        setMonthlyData(chartData);
      })
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="p-8 space-y-12">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Financial Summary</h2>

      {/* Category Pie Chart */}
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Category-wise Total</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Bar Chart */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Monthly Total</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            {/* Bar size reduced to 15 for thinner bars */}
            <Bar dataKey="total" fill="#36A2EB" barSize={65} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportsPage;

