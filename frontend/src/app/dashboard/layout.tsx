'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">OSAFlow</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link href="/dashboard" className="block p-4 hover:bg-gray-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/chats" className="block p-4 hover:bg-gray-200">
                Chats
              </Link>
            </li>
            <li>
              <Link href="/dashboard/campaigns" className="block p-4 hover:bg-gray-200">
                Campaigns
              </Link>
            </li>
            <li>
              <Link href="/dashboard/templates" className="block p-4 hover:bg-gray-200">
                Message Template
              </Link>
            </li>
            <li>
              <Link href="/dashboard/automation" className="block p-4 hover:bg-gray-200">
                Automation
              </Link>
            </li>
            <li>
              <Link href="/dashboard/team" className="block p-4 hover:bg-gray-200">
                Team
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="block p-4 hover:bg-gray-200">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/dashboard/billing" className="block p-4 hover:bg-gray-200">
                Billing and Subscription
              </Link>
            </li>
            <li>
              <Link href="/dashboard/support" className="block p-4 hover:bg-gray-200">
                Support
              </Link>
            </li>
            <li>
              <Link href="/dashboard/developer" className="block p-4 hover:bg-gray-200">
                Developer Tools
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
