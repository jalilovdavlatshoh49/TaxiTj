// src/app/layout.tsx
import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сомонаи ман',
  description: 'Бо Next.js ва Tailwind сохта шудааст',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tg">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}