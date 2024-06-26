import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "@/utils/context";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "devHive",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <ProtectedRoutes>
            {children} <ToastContainer />
          </ProtectedRoutes>
        </DataProvider>
      </body>
    </html>
  );
}
