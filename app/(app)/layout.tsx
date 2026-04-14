import { AppTabNav } from "@/components/app-tab-nav";

export default function AppShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1 px-4 pt-4 pb-24">{children}</main>
      <AppTabNav />
    </div>
  );
}
