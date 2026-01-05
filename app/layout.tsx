import "./globals.css";
import { geistSans, geistMono, atkinsonMono } from "./lib/fonts";


export const metadata = {
  title: "Portfólio - Arthur Fellipe",
  description: "Portfólio profissional de Arthur Fellipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
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
