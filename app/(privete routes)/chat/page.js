import React from "react";
import { ChatInput } from "../../../components/Input/ChatInput";
import Message from "@/components/Chat/Message";

function Chat() {

  return (
    <div className=" text-white relative h-full">
      <div className=" h-[75vh] sc pt-10 px-5 overflow-y-scroll">
        {/* <Message message={{}} /> */}
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
