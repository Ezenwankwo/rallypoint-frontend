import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Our business approach to reaching its target market has 
              improved exponentially since we engaged the services of Rally Point. 
              And, we are able to do a lot more with limited resources.
            </p>

            <Avatar
              image={userOneImg}
              name="Olawale Bello"
              title="Creative Director at Myndz Designs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The communications strategy from Rally Point helped us work smarter. 
              With it, we started seeing results for our efforts. We were able to implement 
              the strategy on a smaller budget and achieve greater results with less effort.
            </p>

            <Avatar
              image={userTwoImg}
              name="Augustus Ezenwankwo"
              title="Co-founder at Townsmeet"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Rally Point’s process was seamless, yet it resulted in a detailed 
              communications strategy that grew my business significantly. 
              I would not hesitate to recommend Rally Point to businesses that plan to scale up.
            </p>

            <Avatar
              image={userThreeImg}
              name="Isreal Akande"
              title="Executive Director at Xtreme Information Technology"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}