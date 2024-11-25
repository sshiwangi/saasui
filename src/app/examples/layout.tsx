import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const routes = [
  { href: "/examples/analytics-chart", name: "AnalyticsChart" },
  { href: "/examples/analytics-breakdown", name: "AnalyticsBreakdown" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-primary-dark">
      <Navbar />
      <div className="flex">
        <Sidebar routes={routes} />
        <div className="py-10 w-full h-[calc(100vh-3.5rem)] overflow-y-auto px-6 text-white">
          {children}
        </div>
      </div>
    </section>
  );
}
