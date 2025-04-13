import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Summary = () => {
  // Data for pie chart
  const data = [
    { name: 'Income', value: 67, color: '#334d7a' },
    { name: 'Expense', value: 33, color: '#af5c5c' }
  ];

  // Budget tracking data with updated values
  const budgetCategories = [
    { name: 'Food and Drinks', spent: 250, total: 1000, color: '#78be6a' },
    { name: 'Entertainment', spent: 460, total: 1200, color: '#dd5151' },
    { name: 'Transportation', spent: 890, total: 2000, color: '#f5a742' },
    { name: 'Clothing', spent: 1850, total: 3500, color: '#4cba89' }
  ];

  // Helper function to calculate progress percentage
  const calculateProgress = (spent, total) => {
    return (spent / total) * 100;
  };

  return (
    <div
      className="dashboardParent w-auto lg:w-[calc(100%-21dvw)] px-4 md:px-6 lg:px-8 h-full overflow-auto lg:overflow-hidden pb-24"
      style={{ width: '-webkit-fill-available', paddingBottom: '6rem' }}
    >
      <div className="mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          ExpenseEase
        </h3>
        <div className="text-[#101010] opacity-50 text-xs md:text-sm">
          01 - 24 March, 2025
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="text-xl md:text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282] w-full md:w-[40dvw]">
          Summary
        </div>

        {/* Financial Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <div className="text-sm text-gray-600">Total Income</div>
            <div className="text-lg md:text-xl font-semibold">₹ 90,000</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <div className="text-sm text-gray-600">Total Expense</div>
            <div className="text-lg md:text-xl font-semibold">₹ 70,000</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <div className="text-sm text-gray-600">Balance</div>
            <div className="text-lg md:text-xl font-semibold">₹ 20,000</div>
          </div>
        </div>

        {/* Charts and Transactions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Income vs Expense Chart */}
            <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
              <h3 className="text-base font-medium mb-4">Income Vs Expense</h3>
              <div className="flex justify-center items-center">
                <PieChart width={180} height={180}>
                  <Pie
                    data={data}
                    cx={90}
                    cy={90}
                    innerRadius={0}
                    outerRadius={70}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#af5c5c] mr-2"></div>
                  <span className="text-sm">Expense</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#334d7a] mr-2"></div>
                  <span className="text-sm">Income</span>
                </div>
              </div>
            </div>

            {/* Budget Tracking */}
            <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
              <h3 className="text-base font-medium mb-4">Budget Tracking</h3>
              <div className="space-y-4">
                {budgetCategories.map((category, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full mr-2`}
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {category.spent}/{category.total} Rs
                      </span>
                    </div>
                    <div className="relative h-2 w-full bg-gray-200 rounded-full">
                      <div
                        className="absolute top-0 left-0 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${calculateProgress(
                            category.spent,
                            category.total
                          )}%`,
                          backgroundColor: category.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Transactions */}
          <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <h3 className="text-base font-medium mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <div className="text-red-500 text-sm">N</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Entertainment (Netflix)
                    </div>
                    <div className="text-xs text-gray-500">
                      5:17 pm • 19mins
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-red-500">-150</div>
              </div>

              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <div className="text-orange-500 text-sm">A</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Transport (AMTS)
                    </div>
                    <div className="text-xs text-gray-500">
                      5:13 pm • 34mins
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-red-500">-150</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;