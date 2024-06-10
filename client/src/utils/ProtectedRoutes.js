"use client";
import { useData } from "./context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { user } = useData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const data = JSON.parse(sessionStorage.getItem("user"));
      if (!data) {
        router.push("/account");
      }
    }
  }, [isClient, user, router]);

  return children;
};

export default ProtectedRoutes;
