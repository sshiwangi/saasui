import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const routes = [
  { href: "/allcomponents/table", name: "Tables" },
  { href: "/allcomponents/coloreditor", name: "ColorEditor" },
  { href: "/allcomponents/calendar", name: "Calendar" },
  { href: "/allcomponents/bargraph", name: "BarGraph" },
  { href: "/allcomponents/piechart", name: "PieChart" },
  { href: "/allcomponents/timepicker", name: "Time Picker" },
  {
    href: "/allcomponents/dashboardthemepicker",
    name: "Dashboard Theme Picker",
  },
  { href: "/allcomponents/search", name: "Search" },
  { href: "/allcomponents/chart", name: "Chart" },
  { href: "/allcomponents/activitytracker", name: "Activity Tracker" },
  { href: "/allcomponents/tabs", name: "Tabs" },
  { href: "/allcomponents/impressions", name: "Impressions Maps" },
  { href: "/allcomponents/stats", name: "Stats" },
  { href: "/allcomponents/button", name: "Buttons" },
  { href: "/allcomponents/card", name: "Card" },
  { href: "/allcomponents/popover", name: "Popover" },
  { href: "/allcomponents/avatar", name: "Avatar" },
  { href: "/allcomponents/voicecommand", name: "Voice Command" },
  { href: "/allcomponents/messageinput", name: "Message Input" },
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
        <div className="py-10 w-full h-screen px-6 text-white">{children}</div>
      </div>
    </section>
  );
}
