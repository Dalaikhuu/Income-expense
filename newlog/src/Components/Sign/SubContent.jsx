import { Login } from "./Login";
export const Container = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center ">
        <Login></Login>
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
};
