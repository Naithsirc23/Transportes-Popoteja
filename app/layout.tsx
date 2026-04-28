import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Popoteja — Taxi para Mascotas | Lima y Callao",
  description: "Transporte seguro y confiable para tu perro o gato en Lima y Callao. Veterinario, grooming, emergencias y más. ¡Tu mejor amigo, en las mejores manos!",
  keywords: "taxi para mascotas, transporte perros, transporte gatos, veterinario Lima, grooming Lima, Popoteja",
  openGraph: {
    title: "Popoteja — Taxi para Mascotas",
    description: "Transporte seguro para tu mascota en Lima y Callao",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
