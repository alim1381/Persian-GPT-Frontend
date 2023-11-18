"use client";

import useRequests from "@/hooks/useRequests";
import { changeCredit } from "@/redux/futures/authSlice";
import { addToFrontMessages } from "@/redux/futures/messageSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function ChatInput({
  showLoader,
  showModal,
  scrollToEnd,
  setNewMessage,
}) {
  // tools
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState("");

  // api
  const [sendQuizRes, sendQuizErr, sendQuizLoading, none, postSendQuiz] =
    useRequests({
      method: "POST",
      path: `/message/new`,
      header: { "Content-Type": "application/json" },
    });

  const sendRequest = (e) => {
    e.preventDefault();
    showLoader(true);
    // send Request
    postSendQuiz({ quiz: quiz });
  };

  // after recive response
  useEffect(() => {
    if (sendQuizRes) {
      dispatch(addToFrontMessages({ text: quiz, aiSide: false }));
      dispatch(addToFrontMessages(sendQuizRes.answer));
      dispatch(changeCredit(sendQuizRes.currentCredit));
      setQuiz("");
      scrollToEnd();
      setNewMessage((prev) => prev + 1);
      showLoader(false);

      setTimeout(() => {
        scrollToEnd();
      }, 1000);
    }
  }, [sendQuizRes]);

  // after recive error
  useEffect(() => {
    if (sendQuizErr) {
      setQuiz("");
      showLoader(false);
      showModal(sendQuizErr?.message || "خطا در برقراری ارتباط");
    }
  }, [sendQuizErr]);

  return (
    <form onSubmit={sendRequest} className=" absolute bottom-0 w-full">
      <div className="flex items-center px-3 py-2 rounded-lg">
        <textarea
          id="chat"
          rows="1"
          dir="rtl"
          className="block sm:mx-4 max-sm:mx-2 p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-neutral-700 placeholder-neutral-400 text-white outline-none focus:border-emerald-500"
          placeholder="سوالی بپرسید..."
          value={quiz}
          onChange={(e) => setQuiz(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 rounded-full cursor-pointer"
          disabled={sendQuizLoading}
        >
          <svg
            className={`w-7 h-7 ${
              sendQuizLoading ? ` fill-neutral-600` : `fill-emerald-500`
            } rotate-90 rtl:-rotate-90`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
