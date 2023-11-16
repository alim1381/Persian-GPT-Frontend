export function ChatInput() {
  return (
    <form className=" absolute bottom-0 w-full">
      <label htmlFor="chat" className="sr-only">
        ...سوالی بپرسید
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg">
        <textarea
          id="chat"
          rows="1"
          dir="rtl"
          className="block sm:mx-4 max-sm:mx-2 p-2.5 w-full text-sm rounded-lg border bg-neutral-800 border-neutral-700 placeholder-neutral-400 text-white outline-none focus:border-emerald-500"
          placeholder="سوالی بپرسید..."
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 rounded-full cursor-pointer  text-blue-500 hover:bg-gray-600"
        >
          <svg
            className="w-7 h-7 fill-emerald-500 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}
