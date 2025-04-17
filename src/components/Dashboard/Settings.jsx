import DashboardWrapper from "./DashBoardWrapper";

export default function Settings() {
  return (
    <DashboardWrapper>
      <div className="mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
          ExpenseEase
        </h3>
        <div className="text-[#101010] opacity-50 text-xs md:text-sm">
          01 - 25 March, 2020
        </div>
      </div>
    </DashboardWrapper>
  );
}
