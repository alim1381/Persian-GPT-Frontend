export function NewNews({text}) {
  return (
    <div className="inline-flex justify-between items-center py-1 px-1 pl-4 mb-7 text-sm rounded-full bg-neutral-800 text-white hover:bg-neutral-700">
      <span className="text-xs bg-emerald-500 rounded-full text-white px-4 py-1.5 ml-3">
        جدید
      </span>{" "}
      <span className="text-sm font-medium  max-sm:text-[10px]">
        {text}
      </span>
    </div>
  );
}
