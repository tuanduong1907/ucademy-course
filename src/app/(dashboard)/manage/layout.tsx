import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  
  if (!userId) {
    // Nếu không có userId, thực hiện redirect
    redirect("/sign-in");
  }
  return <div>{children}</div>;
};

export default layout;
