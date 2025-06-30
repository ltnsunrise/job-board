import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import SidebarUserButtonClient from "./_SidebarUserButtonClient";

function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
}

async function SidebarUserSuspense() {
  const { userId } = await auth();
  return <SidebarUserButtonClient user={{ email: "sssss@dd.dd", name: "hola", imageUrl: " " }} />;
}

export default SidebarUserButton;
