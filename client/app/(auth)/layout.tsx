export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-100 via-white to-blue-200 px-4">
      {children}
    </main>
  );
}
