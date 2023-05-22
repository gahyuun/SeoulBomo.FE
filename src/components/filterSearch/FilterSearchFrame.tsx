"use client";
import DetailSearchFrame from "../commonSearch/DetailSearchFrame";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function FilterSearchFrame() {
  const getFilterSearch = async () => {
    const { data } = await axios.get("/dummy/filterSearchDummy.json");
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["filterSearch"],
    getFilterSearch,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
        console.log(data.content[0]);
        console.log("필터성공입니다");
        console.log(data.content);
      },
      onError: ({ e }: any) => {
        console.log(e.message);
      },
    }
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  //dummy 데이터
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <text className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          당신을 위한 필터링 서비스
        </text>
        <section className="bg-yellowColor px-[1em] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex justify-center items-center gap-3">
          <div>
            <select
              name="연령"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.4rem] lg:px-[1rem] h-[2.6rem] "
            >
              <option disabled selected>
                연령
              </option>
              <option value="all">연령무관</option>
              <option value="infant">영유아</option>
              <option value="child">어린이</option>
              <option value="teen">청소년</option>
            </select>
          </div>
          <div>
            <select
              name="카테고리"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.6rem] lg:px-[1rem] h-[2.6rem] "
            >
              <option disabled selected>
                카테고리
              </option>
              <option value="all">야외시설</option>
              <option value="infant">체험시설</option>
              <option value="child">도서관</option>
              <option value="teen">의료시설</option>
              <option value="child">관공서</option>
              <option value="teen">문화행사</option>
            </select>
          </div>
          <button className="px-[0.6rem] lg:px-[1rem] py-[0.6rem] bg-white rounded-lg shadow-md hover:bg-gray-100">
            <text className="font-inter text-base font-semibold">GO</text>
          </button>
        </section>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <DetailSearchFrame data={data.content} />
      </div>
    </main>
  );
}
