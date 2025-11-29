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
      <body className="flex">
        <Sidebar />
        <main className="ml-64 w-full p-5">{children}</main>
      </body>
    </html>
  );
}
