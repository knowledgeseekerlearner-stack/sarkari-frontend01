import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Sarkari Jeet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* हमने यहां Tailwind की जगह कस्टम CSS क्लास 'app-background' का उपयोग किया है */}
      <body className="flex app-background">
        <Sidebar />
        <main className="ml-64 w-full p-5">{children}</main>
      </body>
    </html>
  );
}
