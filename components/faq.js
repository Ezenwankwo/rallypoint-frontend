import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is a communications strategy?",
    answer: "A communications strategy is a plan for how you will communicate with your audience. It is a document that outlines your goals, your audience, and the tactics you will use to reach them. It is a living document that you will update as you learn more about your audience and your goals.",
  },
  {
    question: "Does my business need a communications strategy?",
    answer: "Yes, every business needs a communications strategy.",
  },
  {
    question: "Why do I need a communications strategy?",
    answer: "A communications strategy will help you to understand your audience and how to reach them. It will help you to understand your goals and how to achieve them. It will help you to understand your brand and how to communicate it.",
  },
  {
    question: "How do I get started on developing my personalised communications strategy?",
    answer: "Contact us by clicking the get started button below and we will get in touch with you to discuss your needs.",
  },
  {
    question: "What do you charge for developing a communications strategy?",
    answer: "We charge a flat fee of $200 for developing a communications strategy. This includes a 1 hour consultation, a 1 hour strategy session, and a 1 hour review session. We will also provide you with a template for your communications strategy.",
  },
];