export default function DashboardWrapper({ children }) {
  return (
    <div className="dashboardParent w-full max-lg:w-full relative">
      {children}
    </div>
  );
}
