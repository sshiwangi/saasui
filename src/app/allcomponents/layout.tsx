import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-800">
      <div className="flex">
        <Sidebar />
        <div className="py-10 w-full px-6 text-white">{children}</div>
      </div>
    </section>
  );
}
