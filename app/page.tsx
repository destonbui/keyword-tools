"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {}
const Page = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/cong-cu-doi-sanh");
  });
};
export default Page;
