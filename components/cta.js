import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-purple-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to grow your business?
          </h2>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link href="/contact">
            <a
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-purple-900 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}