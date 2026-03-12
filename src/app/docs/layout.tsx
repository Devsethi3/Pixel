import { Sidebar } from "@/components/layout/sidebar";
import { MobileDocNav } from "@/components/layout/mobile-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl px-4 sm:px-6">
      <Sidebar />
      <div className="min-w-0 flex-1 py-8 lg:pl-8">
        <MobileDocNav />
        {children}
      </div>
    </div>
  );
}
