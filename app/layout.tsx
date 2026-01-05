import "./globals.css";
import { geistSans, geistMono, atkinsonMono } from "./lib/fonts";


export const metadata = {
  title: "Portfólio - Arthur Fellipe",
  description: "Portfólio profissional de Arthur Fellipe",
  icons: {
    // Usando os ícones já presentes em public/favicon-for-public
    icon: "/favicon-for-public/web-app-manifest-192x192.png",
    shortcut: "/favicon-for-public/web-app-manifest-192x192.png",
    apple: "/favicon-for-public/web-app-manifest-192x192.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon-for-public/web-app-manifest-512x512.png" sizes="512x512" />
        <link rel="icon" href="/favicon-for-public/web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-for-public/web-app-manifest-192x192.png" />
      </head>
      <body
        className={`
          bg-black
          antialiased
          ${geistSans.variable}
          ${geistMono.variable}
          ${atkinsonMono.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
