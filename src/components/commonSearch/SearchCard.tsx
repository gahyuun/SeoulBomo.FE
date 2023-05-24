import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchCard({ category, data, word }: propsType) {
  const searchParams = useSearchParams();
  const borough = searchParams.get("borough");
  const keyword = searchParams.get("keyword");
  const router = useRouter();
  const handleChangePage = () => {
    //카테고리에 따라 라우터 분리
    if (category === "어린이집") {
      router.push(
        `/map-search-list?page=1&size=10&borough=${borough}&center-type=어린이집`
      );
    } else if (category === "공동나눔터") {
      router.push(
        `/map-search-list?page=1&size=10&borough=${borough}&center-type=공동육아나눔터`
      );
    } else if (category === "키움센터") {
      router.push(
        `/map-search-list?page=1&size=10&borough=${borough}&center-type=우리동네키움센터`
      );
    } else if (category === "복지서비스") {
      router.push(
        `/main-search-list?page=1&size=10&keyword=${keyword}&type=care-info`
      );
    } else if (category === "복지시설") {
      router.push(
        `/main-search-list?page=1&size=10&keyword=${keyword}&type=center`
      );
    }
  };

  return (
    <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[3rem]">
      <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]">
        <div className="text-xl sm:text-2xl">{category}</div>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {data.length !== 0 ? (
          data?.map((item: any) => (
            <li
              key={item.id}
              className="flex flex-col justify-between gap-x-4 py-[2rem]"
            >
              <div className="flex flex-col cursor-pointer">
                <p className="text-lg sm:text-xl font-semibold text-gray-900 truncate pb-[0.25rem]">
                  {item.name}
                </p>
                <p className="mt-1 truncate text-sm sm:text-md leading-5 text-gray-500">
                  {item.address}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
            <div className="flex flex-col ">
              <p className="text-lg sm:text-xl font-semibold text-gray-900  pb-[0.25rem]">
                {category} 카테고리에서는 ‘{word}’ 에 대한 결과가 존재하지
                않습니다!
              </p>
            </div>
          </li>
        )}
      </ul>
      <div onClick={handleChangePage}>
        {data.length >= 3 ? (
          <div className="font-normal text-xs sm:text-sm text-gray-400 hover:underline underline-offset-4 hover:cursor-pointer">
            내용 더보기
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}
interface propsType {
  category: String;
  data: object[];
  word: any;
}
