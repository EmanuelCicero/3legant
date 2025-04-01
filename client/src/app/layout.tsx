import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: '3legant',
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
