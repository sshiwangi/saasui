import Navbar from "@/components/shared/Navbar1";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-primary-dark">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="py-10 w-full h-screen px-6 text-white">{children}</div>
      </div>
    </section>
  );
}
