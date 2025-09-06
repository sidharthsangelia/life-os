// app/(dashboard)/layout.tsx
import SideBar from "@/components/sidebar/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto ">
        <div className="">
          {children}
        </div>
      </main>
    </div>
  );
}