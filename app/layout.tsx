import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'LinkUs · Feel at home in Korea', description: 'A multilingual rental contract companion for international students. Interactive demonstration.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
