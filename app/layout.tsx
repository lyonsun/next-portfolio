import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Providers } from './providers';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Liang Sun',
    description: 'KEEP DRY!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
