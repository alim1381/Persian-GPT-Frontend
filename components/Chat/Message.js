import React from "react";

function Message({ text, aiSide }) {
  // const direction = "ضصثقفغعهخحجچپگکمنتالبیسشظطزرذدئو".includes(textBody[0])
  //   ? "rtl"
  //   : "ltr";
  if (!aiSide) {
    return (
      <div className="flex items-end justify-end py-2">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-emerald-500 text-neutral-800 ">
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (aiSide) {
    return (
      <div className="flex items-end py-2">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">
              {text}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
