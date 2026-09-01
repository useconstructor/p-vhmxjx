import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dataflow Analytics',
  description: 'A modern SaaS analytics dashboard product with clean tech aesthetics, featuring animated data visualizations, tiered pricing, and strong conversion-focused CTAs for free trial signups.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0A0F1C', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
