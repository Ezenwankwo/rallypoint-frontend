import Image from "next/image";
import Container from "./container";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Communication Strategy for Startups
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We help startups and small businesses build a successful communication strategy that will help them grow.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/">
                <a
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                  Get in Touch
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="mt-16 md:mt-0">
            <Image src="/hero.svg" width="400" height="400" alt="hero" />
          </div>
        </div>
      </Container>
    </>
  );
}
