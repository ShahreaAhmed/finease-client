import React from "react";

const FinancialPlanningMatters = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Why Financial Planning Matters
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Achieve Your Goals</h3>
            <p className="text-gray-600">
              Financial planning helps you prioritize and reach both short-term and long-term goals with clarity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Manage Risks</h3>
            <p className="text-gray-600">
              Planning allows you to foresee potential risks and prepare strategies to minimize financial uncertainties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Ensure Stability</h3>
            <p className="text-gray-600">
              By budgeting, saving, and investing wisely, financial planning ensures long-term financial security.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Reduce Stress</h3>
            <p className="text-gray-600">
              Knowing your finances are under control reduces stress and gives you confidence to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanningMatters;
