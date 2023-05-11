import Image from "next/image";
import RadioBox from "./RadioBox";

export default function FilterSection() {
  const cardData = [
    {
      id: 1,
      path: "/images/infant.png",
      text: "영유아",
    },
    {
      id: 2,
      path: "/images/child.png",
      text: "어린이",
    },
    {
      id: 3,
      path: "/images/teen.png",
      text: "청소년",
    },
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.place.value);
        console.log(e.target.age.value);
      }}
    >
      <section className="w-[screen] flex items-center justify-center">
        <div className="rounded-[0.625rem]">
          <div className="flex flex-col items-center justify-center">
            <text className="font-bold text-2xl ">
              당신을 위한 맞춤형 필터링 서비스
            </text>

            <text className="pt-[1rem] text-xl font-medium pb-[3rem]">
              우리 아이의 나이를 선택하고 필요한 정보를 받아보세요
            </text>
          </div>
          <div className="flex gap-[2rem]">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="age"
                value="연령무관"
              />
              <div className="bg-white text-gray-300 w-[12rem] h-[15.5rem] ml-[4rem] drop-shadow-md rounded-[0.3rem] flex items-center justify-center flex-col hover:-translate-y-3 ease-in-out duration-300 peer-checked:bg-yellow-200 peer-checked:text-black peer-checked:ring-yellow-400 peer-checked:ring-offset-2 ring-2 ring-transparent">
                <text className="font-semibold font-xl">연령무관</text>
              </div>
            </label>
            {cardData.map((item) => (
              <label className="cursor-pointer" key={item.id}>
                <input
                  type="radio"
                  className="peer sr-only"
                  name="age"
                  value={item.text}
                />
                <div className="bg-white text-gray-300 w-[12rem] h-[15.5rem] drop-shadow-md rounded-[0.3rem] flex items-center justify-center flex-col hover:-translate-y-3 ease-in-out duration-300 peer-checked:bg-yellow-200 peer-checked:text-black peer-checked:ring-yellow-400 peer-checked:ring-offset-2 ring-2 ring-transparent">
                  <Image
                    className="h-[6.5rem] w-[5.2rem]"
                    src={item.path}
                    width={200}
                    height={200}
                    alt="로고"
                  />
                  <text className="font-semibold font-lg mt-[2rem]">
                    {item.text}
                  </text>
                </div>
              </label>
            ))}
            <RadioBox />
          </div>
        </div>
      </section>
    </form>
  );
}
