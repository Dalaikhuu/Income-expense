import { MdHome } from "react-icons/md";
export const Records = () => {
  const Histoty = [
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
    {
      text: "Lending & Renting",
      icons: <MdHome size={25} className="text-white" />,
      hours: "2 hours ago",
      money: "1234₮",
    },
  ];
  return (
    <div className="rounded-xl bg-white w-[1220px] mt-10 ">
      <div className="font-bold text-[#0F172A] p-4">Last Records</div>
      <div>
        {Histoty.map((el, index) => {
          return (
            <div key={index} className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0166FF] flex items-center justify-center">
                    {el.icons}
                  </div>
                  <div>
                    <h1>{el.text}</h1>
                    <p className="text-[#6B7280]">{el.hours}</p>
                  </div>
                </div>
                <div className="text-[#84CC16]">{el.money}</div>
              </div>
              <hr className="mt-5" />
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
