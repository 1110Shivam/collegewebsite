import "./globals.css";

export const metadata = {
  title: "FIT College",
  description: "Forte Institute of technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
