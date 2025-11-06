import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">OSAFlow Lite</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                href="/dashboard"
                className="block p-4 hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/contacts"
                className="block p-4 hover:bg-gray-700"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/templates"
                className="block p-4 hover:bg-gray-700"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/campaigns"
                className="block p-4 hover:bg-gray-700"
              >
                Campaigns
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
