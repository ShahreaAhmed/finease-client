import React from "react";

const BudgetingTips = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Budgeting Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Track Your Expenses</h3>
            <p className="text-gray-600">
              Keep a detailed record of your income and expenditures to understand where your money goes each month.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Set Realistic Goals</h3>
            <p className="text-gray-600">
              Define clear financial goals and allocate your budget accordingly to avoid overspending.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Use Budgeting Tools</h3>
            <p className="text-gray-600">
              Take advantage of apps and spreadsheets to plan, track, and visualize your budget efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Review Regularly</h3>
            <p className="text-gray-600">
              Regularly revisit your budget to make adjustments, spot unnecessary expenses, and optimize savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetingTips;
