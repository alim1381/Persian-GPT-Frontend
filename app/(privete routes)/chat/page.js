"use client";
import { useEffect, useRef, useState } from "react";
import { ChatInput } from "../../../components/Input/ChatInput";
import Message from "@/components/Chat/Message";
import { useDispatch, useSelector } from "react-redux";
import useRequests from "@/hooks/useRequests";
import { addToBackMessages } from "@/redux/futures/messageSlice";
import Loader from "@/components/Loader";
import MsgErrorModal from "@/components/modal/MsgErrorModal";

function Chat() {
  // tools
  const dispatch = useDispatch();
  const endMessage = useRef(null);

  // state
  const messagesState = useSelector((state) => state.messagesState);
  const [pageNumber, setPageNumber] = useState(1);
  const [newMessage, setNewMessage] = useState(0);
  const [lastMessage, setLastMessage] = useState(null);
  const [isFinishedMessage, setIsFinishedMessage] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(null);

  // api
  const [previousMsgRes, previousMsgErr, previousMsgLoading, getPreviousMsg] =
    useRequests({
      method: "GET",
      path: `/message?page=${pageNumber}&newMessage=${newMessage}`,
    });

  // get previous Messages
  useEffect(() => {
    if (!isFinishedMessage) {
      setLoading(true);
      getPreviousMsg();
    }
  }, [pageNumber]);

  // add Response to Redux State
  useEffect(() => {
    if (previousMsgRes) {
      dispatch(addToBackMessages(previousMsgRes));
      setLoading(false);
    }
    if (previousMsgRes !== null && previousMsgRes.length === 0) {
      setIsFinishedMessage(true);
    }
  }, [previousMsgRes]);

  // errorboundry
  useEffect(() => {
    if (previousMsgErr) {
      setLoading(false);
      setShowModal(previousMsgErr?.message || "خطا در دریافت اطلاعات");
    }
  }, [previousMsgErr]);

  // scroll to end
  const scrollToEnd = () => {
    endMessage.current?.scrollIntoView({ behavior: "smooth" });
  };

  // fetching by scroll
  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPageNumber((prev) => prev + 1);
    }
  });

  useEffect(() => {
    if (lastMessage) {
      observerRef.observe(lastMessage);
    }
    return () => {
      if (lastMessage) {
        observerRef.unobserve(lastMessage);
      }
    };
  }, [lastMessage]);

  return (
    <div className=" text-white relative h-full">
      {/* Loader */}
      {loading && <Loader />}

      {/* Modal */}
      {showModal && <MsgErrorModal content={showModal} close={setShowModal} />}

      {/* messages */}
      <div className=" h-[75vh] sc px-5 overflow-y-scroll flex flex-col-reverse">
        <div ref={endMessage} />
        {messagesState.map((msg, index) => (
          <div key={index} ref={setLastMessage}>
            <Message {...msg} />
          </div>
        ))}
      </div>

      {/* input */}
      <ChatInput
        scrollToEnd={scrollToEnd}
        showModal={setShowModal}
        showLoader={setLoading}
        setNewMessage={setNewMessage}
      />
    </div>
  );
}

export default Chat;
