import 'tw-elements/dist/css/tw-elements.min.css';
import './globals.css';
import localFont from 'next/font/local';

const anjoman = localFont({
  src: '../assets/fonts/AnjomanMaxLightVF.woff2',
  weight: '100 1000',
  variable: '--anjoman-font',
});

export const metadata = {
  title: 'IRCF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={anjoman.className}>{children}</body>
    </html>
  );
}
