export default function DashboardWrapper({ children }) {
  return (
    <div className="dashboardParent w-[50dvw] max-lg:w-full relative">
      {children}
    </div>
  );
}
