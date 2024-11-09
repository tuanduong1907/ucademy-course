/* eslint-disable react-hooks/rules-of-hooks */
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  console.log("User ID:", userId);

  if (!userId) {
    redirect("/sign-in");
  }
  return <div>{children}</div>;
};

export default layout;
