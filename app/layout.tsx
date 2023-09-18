import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Providers } from './providers';
import Script from 'next/script';

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
            {process.env.NODE_ENV === 'production' && (
                <>
                    <Script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-ZGT4BC0C4P"
                    />
                    <Script
                        id="google-tag-namager"
                        dangerouslySetInnerHTML={{
                            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-ZGT4BC0C4P');
                `,
                        }}
                    ></Script>
                </>
            )}

            <body className={robotoMono.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
