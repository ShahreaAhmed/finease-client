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

