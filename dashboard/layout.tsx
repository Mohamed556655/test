import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description:
    'Admin dashboard web page with Next.js and Shadcn. This web page is designed to manage employees, user profiles, and products. It includes features like viewing, adding, updating, and deleting employee data, user profiles, and products. It also includes features like searching, sorting, pagination, and drag and drop functionality to manage employee data.'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
