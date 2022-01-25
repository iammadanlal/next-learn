import Link from "next/link";
import React from "react";
import "../src/styles.module.css";

const Page = () => (
  <div>
    <h1>index page</h1>
    <Link href={"notes"}>
      <a>Notes Link</a>
    </Link>
  </div>
);

export default Page;
