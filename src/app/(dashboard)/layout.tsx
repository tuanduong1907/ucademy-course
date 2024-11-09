import Sidebar from '@/components/layouts/Sidebar'
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const layout = async ({children}: {children:React.ReactNode}) => {
  const { userId } = await auth();

  // Debugging: Kiểm tra userId
  console.log("User ID:", userId);

  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
    <Sidebar></Sidebar>
    <main>{children}</main>
  </div>
  )
}

export default layout