"use client";

import React from "react";
import { Button } from "./ui/button";
import { authApiRequest } from "@/apiRequest/auth";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ButtonLogout = () => {
  const route = useRouter();

  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer();
      route.push("/login");
    } catch (error) {
      handleErrorApi({ error: error });
    }
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default ButtonLogout;
