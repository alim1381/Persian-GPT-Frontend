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
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(null);

  // api
  const [previousMsgRes, previousMsgErr, previousMsgLoading, getPreviousMsg] =
    useRequests({ method: "GET", path: `/message?page=${pageNumber}` });

  // get previous Messages
  useEffect(() => {
    getPreviousMsg();
  }, []);

  // add Response to Redux State
  useEffect(() => {
    if (previousMsgRes) {
      dispatch(addToBackMessages(previousMsgRes));
    }
  }, [previousMsgRes]);

  // scroll to end
  const scrollToEnd = () => {
    endMessage.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <div key={index}>
            <Message {...msg} />
          </div>
        ))}
      </div>

      {/* input */}
      <ChatInput
        scrollToEnd={scrollToEnd}
        showModal={setShowModal}
        showLoader={setLoading}
      />
    </div>
  );
}

export default Chat;
