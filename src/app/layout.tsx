import "./globals.css";

export const metadata = {
  title: "RM Smart Car",
  description: "Oficina especializada em manutenção de viaturas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body>{children}</body>
    </html>
  );
}
