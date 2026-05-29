import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ambitly | AI-Powered Workflow Intelligence | LinkedIn',
  description: 'Ambitly – AI-powered productivity and workflow platform for ambitious teams. Work smarter. Scale faster.',
  openGraph: {
    title: 'Ambitly | LinkedIn',
    description: 'AI-Powered Workflow Intelligence · Work Smarter. Scale Faster.',
    url: 'https://ambitly.org',
    siteName: 'LinkedIn',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
