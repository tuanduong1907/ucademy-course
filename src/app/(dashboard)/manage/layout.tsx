/* eslint-disable react-hooks/rules-of-hooks */
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { useState } from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  
  const { userId } = await auth();
  console.log(userId);

  if (!userId) {
    // Nếu không có userId, thực hiện redirect
    redirect("/sign-in");
  }
  return <div>{children}</div>;
};

export default layout;
