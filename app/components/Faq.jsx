'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const Faq = () => {

  const [activeFaq, setActiveFaq] = useState(null)

  const questions = [
    {
      id: 1,
      question: "How to create an account",
      answer: "How to create an account",
    },
    {
      id: 2,
      question: "How to create an account",
      answer: "How to create an account",
    },
    {
      id: 3,
      question: "How to create an account",
      answer: "How to create an account",
    },
    {
      id: 4,
      question: "How to create an account",
      answer: "How to create an account",
    }
  ]

  return (
    <div>
      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center mb-20">
            <h2 class="text-3xl font-bold leading-tight text-[#222] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>
          </div>

          {questions.map((q) => (
            <div key={q.id}>
              <div class="max-w-3xl mx-auto mt-3 space-y-4 ">
                <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full px-4 py-5 sm:p-6 "
                    onClick={() =>
                      setActiveFaq(activeFaq === q.id ? null : q.id)
                    }
                  >
                    <span class="flex text-lg font-semibold text-black">
                      {" "}
                      {q.question}
                    </span>

                    {activeFaq ? (
                      <span>
                        <svg
                          class="w-6 h-6 text-gray-400 rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span>
                        <svg
                          class="w-6 h-6 text-gray-400 rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    )}
                  </button>

                  <AnimatePresence>
                    {activeFaq === q.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        class=""
                      >
                        <p className="font-tt px-4 pb-5 sm:px-6 sm:pb-6">
                          {q.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* End */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq