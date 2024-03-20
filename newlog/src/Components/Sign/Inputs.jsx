export const Inputs = () => {
  return (
    <div className="flex-col flex gap-6 ">
      <input
        placeholder="Email"
        className="w-[384px] h-12 rounded-xl text-black bg-gray-100 px-3"
      />
      <input
        placeholder="Password"
        className="w-[384px] h-12 rounded-xl text-black bg-gray-100 px-3"
      />
    </div>
  );
};
