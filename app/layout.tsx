import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Liang Sun',
    description: 'KEEP DRY!',
};

const gtmScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-ZGT4BC0C4P');`;

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
                        id="google-tag-manager"
                        dangerouslySetInnerHTML={{
                            __html: gtmScript,
                        }}
                    ></Script>
                </>
            )}

            <body className={robotoMono.className}>{children}</body>
        </html>
    );
}
