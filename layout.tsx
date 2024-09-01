import { lazy, ReactNode, Suspense } from 'react';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Cairo } from 'next/font/google';
import './globals.css';
import Loading from './loading';
const Toaster = lazy(() => import('@/components/ui/toaster'));

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // const session = await auth();
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <body
        className={`${cairo.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={true} />
        <Toaster />

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
