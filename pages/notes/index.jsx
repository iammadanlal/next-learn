import Link from "next/link";
import React from "react";

const Page = () => (
  <div>
    Note index page
    <Link href={"notes/[id]"} as={`notes/1`}>
      <a>Note 1</a>
    </Link>
  </div>
);

export default Page;
