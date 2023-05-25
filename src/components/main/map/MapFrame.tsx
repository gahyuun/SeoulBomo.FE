import Link from "next/link";

export default function MapFrame() {
  const outLineStyle =
    "stroke-black stroke-2 fill-white hover:fill-yellowColor";

  return (
    <div className="w-screen mt-[8rem] flex items-center justify-center">
      <text className="font-bold text-[3rem] hidden lg:block" x="0" y="153">
        우리 동네
        <br /> <text className="text-yellow-300">복지 시설</text> 알아보기
      </text>
      <div className="hidden lg:flex">
        <svg height="656" width="800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="dropshadow">
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="2"
              ></feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter id="dropshadow2">
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="0.5"
              ></feGaussianBlur>
              <feOffset dx="1" dy="1" result="offsetblur"></feOffset>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#dropshadow)">
            <Link href="/map-search?borough=종로구">
              <path
                id="CD11110"
                className={outLineStyle}
                d="M 455 297 l 4 -2 1 0 1 0 3 -1 4 5 7 3 2 6 0 8 -11 2 -11 1 -8 0 -9 1 -8 1 -9 1 -9 -2 -10 -1 -9 1 -4 3 -2 3 -6 -6 -3 -4 -5 -6 -4 -5 -2 -5 5 -3 0 -6 0 -10 0 -9 1 -9 -3 -4 -2 0 -2 0 -1 -4 0 -9 -5 -9 1 -10 -1 -11 -1 -6 2 -6 5 -2 7 -3 10 -2 2 -1 3 0 1 0 4 -2 8 -1 3 6 4 1 3 8 3 10 1 6 3 5 0 9 0 7 -1 5 -6 3 -6 4 -1 5 6 4 5 3 5 4 9 1 10 0 4 4 3 4 5 10 1 3 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=중구">
              <path
                id="CD11140"
                className={outLineStyle}
                d="M 477 316 l 0 9 5 5 -1 3 -4 5 -4 5 -5 4 -4 7 -3 4 -4 3 -4 10 -2 -1 -3 -7 -2 -5 -2 1 -1 0 -2 -1 -3 1 0 0 -3 1 -4 2 -5 -5 -6 -3 -10 -3 -4 -1 -3 -1 -2 2 -4 -1 -3 -1 -9 0 -2 2 -4 3 0 -7 1 -4 -2 -2 0 -1 6 -3 6 -4 -1 -2 -2 -5 2 -3 4 -3 9 -1 10 1 9 2 9 -1 8 -1 9 -1 8 0 11 -1 z "
              ></path>
            </Link>

            <Link href="/map-search?borough=용산구">
              <path
                id="CD11170"
                className={outLineStyle}
                d="M 394 349 l 3 1 4 1 2 -2 3 1 4 1 10 3 6 3 5 5 4 -2 3 -1 0 0 3 -1 2 1 1 0 2 -1 2 5 3 7 2 1 5 9 6 2 2 9 -4 5 -4 5 -5 6 -3 4 -5 4 -5 5 -5 4 -5 3 -8 8 -5 8 -7 3 -7 -1 -10 -4 -3 -1 -6 -3 -6 -5 -5 -3 -6 -3 -9 -3 1 -5 0 -10 -2 -8 -6 -11 5 -2 4 -1 5 -4 5 -6 2 -5 3 -6 6 -5 0 -3 -2 -3 4 -3 2 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=성동구">
              <path
                id="CD11200"
                className={outLineStyle}
                d="M 511 315 l 7 4 6 6 4 4 6 5 2 0 15 3 4 0 -5 20 -3 5 -5 12 -3 7 -10 20 -7 -4 -5 -3 -4 -4 -10 -3 -10 0 -7 0 -12 0 -8 4 -2 -9 -6 -2 -5 -9 4 -10 4 -3 3 -4 4 -7 5 -4 4 -5 4 -5 1 -3 -5 -5 0 -9 6 1 11 -1 5 -2 2 -1 6 0 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=광진구">
              <path
                id="CD11215"
                className={outLineStyle}
                d="M 605 315 l 1 1 -1 4 -1 7 -2 9 3 6 4 4 3 -3 9 -1 3 3 -4 10 -2 10 -2 5 -2 4 -4 5 -5 5 -5 4 -11 12 -3 3 -3 2 -8 5 -6 3 -5 1 -5 -1 -5 -1 -6 -2 -12 -5 -7 -4 13 -27 5 -12 3 -5 5 -20 3 -8 4 -5 4 -9 7 1 11 3 9 -3 4 -3 4 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=동대문구">
              <path
                id="CD11230"
                className={outLineStyle}
                d="M 554 245 l 2 10 -2 5 -3 6 2 9 1 6 3 9 3 6 2 3 1 11 3 5 -4 9 -4 5 -3 8 -4 0 -15 -3 -2 0 -6 -5 -4 -4 -6 -6 -7 -4 -4 -2 -6 0 -2 1 -5 2 -11 1 -6 -1 0 -8 -2 -6 6 -4 6 -5 4 -6 3 -4 4 -5 2 -3 6 -8 4 -2 8 -3 4 -5 7 -1 7 -2 4 -6 7 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=중랑구">
              <path
                id="CD11260"
                className={outLineStyle}
                d="M 621 218 l 5 3 1 6 0 10 2 8 -3 8 -3 5 0 3 3 4 -1 6 -4 2 -5 9 0 5 -4 6 -4 3 -4 5 -3 10 -4 2 -4 3 -9 3 -11 -3 -7 -1 -3 -5 -1 -11 -2 -3 -3 -6 -3 -9 -1 -6 -2 -9 3 -6 2 -5 -2 -10 0 -8 2 -11 6 -3 4 -1 9 -4 9 1 10 1 6 -2 9 -1 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=성북구">
              <path
                id="CD11290"
                className={outLineStyle}
                d="M 455 297 l -3 -2 -1 -3 -5 -10 -3 -4 -4 -4 -10 0 -9 -1 -5 -4 -5 -3 -6 -4 1 -5 6 -4 6 -3 1 -5 0 -7 0 -9 -3 -5 -1 -6 -3 -10 -3 -8 -4 -1 -3 -6 9 -5 4 -3 4 1 5 4 6 4 3 2 4 5 5 5 7 3 5 2 -1 3 0 0 0 2 1 3 5 6 9 3 4 3 5 3 8 -1 6 4 9 -4 4 -6 4 -4 4 -4 4 -6 4 -3 5 4 4 5 5 5 5 4 9 0 9 -2 -2 11 0 8 -7 1 -7 2 -4 6 -7 2 -7 1 -4 5 -8 3 -4 2 -6 8 -2 3 -4 5 -3 4 -4 6 -6 5 -6 4 -7 -3 -4 -5 -3 1 -1 0 -1 0 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=강북구">
              <path
                id="CD11305"
                className={outLineStyle}
                d="M 448 87 l 2 0 1 0 0 0 4 4 3 7 4 5 4 7 3 5 1 2 -2 4 -2 6 -2 9 -2 8 -1 5 0 4 2 4 5 3 3 0 2 -1 3 2 7 5 3 3 7 6 2 6 5 4 3 7 6 6 7 6 3 6 -4 3 -4 6 -4 4 -4 4 -4 6 -9 4 -6 -4 -8 1 -5 -3 -4 -3 -9 -3 -4 -6 -2 -3 0 -2 0 0 1 -3 -5 -2 -7 -3 -5 -5 -4 -5 -3 -2 -6 -4 -5 -4 -4 -1 3 -4 0 -6 -3 -4 1 -3 2 -3 -2 -4 -3 -7 -4 -9 4 -1 7 -7 4 -8 6 -4 2 -5 0 -13 -1 -7 2 -5 6 -5 7 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=도봉구">
              <path
                id="CD11320"
                className={outLineStyle}
                d="M 463 157 l -2 -4 0 -4 1 -5 2 -8 2 -9 2 -6 2 -4 -1 -2 -3 -5 -4 -7 -4 -5 -3 -7 -1 -9 0 -8 4 -11 8 -8 10 1 9 0 3 4 1 6 3 5 9 -1 4 -2 4 -1 4 4 5 0 5 13 0 9 -1 5 -4 12 0 8 3 9 2 9 3 10 1 9 2 7 -2 13 -3 -4 -2 -3 -2 3 -5 5 -1 6 -4 9 -1 7 -6 -6 -3 -7 -5 -4 -2 -6 -7 -6 -3 -3 -7 -5 -3 -2 -2 1 -3 0 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=노원구">
              <path
                id="CD11350"
                className={outLineStyle}
                d="M 619 183 l 1 7 -3 7 -6 5 -3 7 1 8 -9 1 -6 2 -10 -1 -9 -1 -9 4 -4 1 -6 3 -9 2 -9 0 -5 -4 -5 -5 -4 -5 -5 -4 -3 -6 -7 -6 1 -7 4 -9 1 -6 5 -5 2 -3 2 3 3 4 2 -13 -2 -7 -1 -9 -3 -10 -2 -9 -3 -9 0 -8 4 -12 1 -5 0 -9 6 -4 5 -2 4 -4 4 -6 6 0 3 1 4 0 5 -1 4 -2 7 -1 5 8 5 5 5 0 3 -1 5 4 -3 10 -2 7 -1 2 1 3 3 7 2 8 -2 11 -2 5 -3 4 0 4 2 6 1 6 0 10 3 5 7 0 5 -2 5 0 4 4 4 3 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=은평구">
              <path
                id="CD11380"
                className={outLineStyle}
                d="M 368 148 l 3 2 1 3 2 11 2 9 2 8 3 5 0 5 -3 3 -5 5 -7 3 -5 2 -2 6 1 6 1 11 -1 10 -7 6 -4 3 -4 7 0 7 -5 2 -9 4 -4 4 -3 5 -3 7 -5 4 -3 4 -8 -1 0 -3 -1 0 -3 -2 -3 2 -4 5 -4 5 -5 5 -1 5 -9 -8 -12 -9 -1 -2 -6 -6 -4 -5 6 -9 1 2 -2 5 2 5 8 0 9 -1 3 -6 1 -4 2 -5 -1 -9 2 -8 -2 -10 2 -10 4 -7 3 -4 2 -6 2 -9 -1 -10 5 -4 0 -1 -1 -5 1 -4 1 -4 0 -5 -5 -3 -5 -5 0 -1 1 1 5 3 6 4 11 -1 10 -3 3 -3 4 -2 9 -4 4 -5 3 -5 5 -2 6 -2 3 4 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=서대문구">
              <path
                id="CD11410"
                className={outLineStyle}
                d="M 365 255 l 1 4 2 0 2 0 3 4 -1 9 0 9 0 10 0 6 -5 3 2 5 4 5 5 6 3 4 6 6 2 5 1 2 -6 4 -6 3 -3 3 -8 0 -10 1 -11 1 -7 2 -10 -4 -7 -6 -2 -10 -6 -3 -6 -2 -4 -2 -8 -4 -5 -5 -7 -5 1 -5 5 -5 4 -5 4 -5 3 -2 3 2 1 0 0 3 8 1 3 -4 5 -4 3 -7 3 -5 4 -4 9 -4 5 -2 0 -7 4 -7 4 -3 7 -6 5 9 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=마포구">
              <path
                id="CD11440"
                className={outLineStyle}
                d="M 263 289 l 12 9 9 8 7 5 5 5 8 4 4 2 6 2 6 3 2 10 7 6 10 4 7 -2 11 -1 10 -1 8 0 3 -3 0 1 2 2 -1 4 0 7 2 3 0 3 -6 5 -3 6 -2 5 -5 6 -5 4 -4 1 -5 2 -7 -4 -5 -4 -5 -3 -5 -2 -4 1 -4 2 -6 -4 -11 0 -12 0 -5 -2 -6 -7 -6 -6 -8 -4 -8 -4 -5 -4 -5 -3 -11 -7 -8 -5 -4 -2 -6 -4 -4 -4 -4 -3 -6 -6 -1 -3 8 -4 4 -2 4 -2 10 -2 10 -2 3 -2 0 -1 -1 -6 0 -5 4 -5 5 -4 4 5 6 6 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=양천구">
              <path
                id="CD11470"
                className={outLineStyle}
                d="M 240 363 l 8 -1 5 5 2 5 4 8 4 9 -2 3 2 2 0 2 -8 3 -5 4 -3 4 -2 12 0 4 -2 7 -4 6 -1 8 -2 6 -1 -1 -4 -2 -10 -2 -6 -2 -4 -5 -8 -1 -8 2 -4 4 -7 3 -4 3 -5 1 -3 -1 -4 -5 -4 -4 -4 -2 -3 -12 2 -9 1 -7 4 -5 0 -4 -4 -4 -4 -6 -2 -11 4 -7 3 -7 5 -2 1 6 5 5 2 6 3 9 3 7 3 4 12 1 7 -2 11 -1 7 -2 1 -8 0 -7 -1 -9 0 -10 2 -8 5 2 5 4 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=강서구">
              <path
                id="CD11500"
                className={outLineStyle}
                d="M 134 254 l 3 3 6 4 4 4 4 6 4 3 6 4 5 4 6 4 5 3 4 4 6 5 3 2 6 5 9 6 1 3 6 6 4 3 4 4 6 4 4 2 8 5 11 7 -4 8 3 9 -8 1 -8 -2 -5 -4 -5 -2 -2 8 0 10 1 9 0 7 -1 8 -7 2 -11 1 -7 2 -12 -1 -3 -4 -3 -7 -3 -9 -2 -6 -5 -5 -1 -6 -5 2 -3 7 -10 2 -9 -1 -7 -4 -3 -2 0 1 -9 5 -2 5 -6 2 -2 -6 -4 -5 -5 -4 -7 -2 -9 -2 -7 -4 -4 1 -1 -2 -2 -2 1 -1 -3 -2 -2 -7 8 -4 2 -5 6 -2 -1 -5 -2 -5 0 -3 2 1 0 1 5 -3 3 -3 -1 -2 2 -1 1 -5 8 -4 1 -1 1 1 2 -5 2 -6 1 3 1 2 2 -9 2 -4 2 2 1 -4 5 -5 0 -6 -3 -5 -1 -6 0 -5 3 -4 4 -6 4 2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=구로구">
              <path
                id="CD11530"
                className={outLineStyle}
                d="M 245 419 l 6 7 4 4 5 2 4 4 4 9 -1 9 2 9 1 6 1 5 3 7 5 5 4 3 -3 5 -4 5 -10 1 -7 -3 -4 -5 -5 -4 -5 -3 -2 0 -2 1 -3 -5 -4 -2 3 -2 0 -1 -3 0 -3 2 -1 -5 -2 -6 -2 1 -1 1 1 1 -4 4 -5 3 -4 5 -4 4 -6 6 -9 2 -2 4 -1 10 -6 0 -8 -1 -5 -4 -4 0 -4 2 -9 0 -5 1 -8 1 2 -4 4 -5 2 -8 2 -5 3 -4 -2 -5 -3 -1 -8 -5 -1 -7 6 -3 4 -6 2 -4 2 -6 5 -6 4 2 4 4 4 5 3 1 5 -1 4 -3 7 -3 4 -4 8 -2 8 1 4 5 6 2 10 2 4 2 1 1 2 -6 1 -8 4 -6 2 -7 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=금천구">
              <path
                id="CD11545"
                className={outLineStyle}
                d="M 241 486 l 2 -1 2 0 5 3 5 4 4 5 7 3 10 -1 11 -1 6 1 3 10 -3 8 3 6 3 6 1 6 4 8 8 3 3 4 5 4 2 6 -7 7 -2 5 -3 6 -8 1 -5 4 -4 7 -9 -1 -4 -4 -3 -4 -2 -9 -3 -5 -2 -3 1 -3 -1 -3 -3 -4 -6 -3 -4 -6 -1 -9 -4 -4 -1 -4 2 -2 -2 -3 -3 -5 -4 -6 -2 -4 -4 -9 -3 -8 -1 -4 1 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=영등포구">
              <path
                id="CD11560"
                className={outLineStyle}
                d="M 249 345 l 5 3 5 4 8 4 8 4 6 6 6 7 5 2 12 0 11 0 6 4 4 -2 4 -1 5 2 5 3 5 4 7 4 6 11 2 8 0 10 -1 5 -11 2 -8 1 -9 1 -8 2 -2 5 -3 8 -2 3 -3 10 -2 8 -9 2 -3 1 -4 7 -4 5 -3 5 -4 6 -4 -3 -5 -5 -3 -7 -1 -5 -1 -6 -2 -9 1 -9 -4 -9 -4 -4 -5 -2 -4 -4 -6 -7 2 -12 3 -4 5 -4 8 -3 0 -2 -2 -2 2 -3 -4 -9 -4 -8 -2 -5 -5 -5 -3 -9 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=동작구">
              <path
                id="CD11590"
                className={outLineStyle}
                d="M 367 426 l 6 3 5 3 6 5 6 3 3 1 10 4 7 1 -3 4 0 0 4 5 2 8 -2 11 0 6 -1 11 0 8 0 9 -5 -2 -14 0 -3 -2 -5 -4 -6 -10 0 -11 -2 -6 -7 3 -3 1 -2 -2 -7 -3 -9 1 -7 0 -11 -2 -6 -1 -6 7 -6 1 -10 4 -4 3 -2 1 -12 3 4 -6 3 -5 4 -5 4 -7 3 -1 9 -2 2 -8 3 -10 2 -3 3 -8 2 -5 8 -2 9 -1 8 -1 11 -2 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=관악구">
              <path
                id="CD11620"
                className={outLineStyle}
                d="M 323 470 l 6 1 11 2 7 0 9 -1 7 3 2 2 3 -1 7 -3 2 6 0 11 6 10 5 4 3 2 14 0 5 2 2 8 4 6 3 4 0 11 1 5 -9 4 -7 2 -3 1 -5 4 -5 7 -8 5 -2 7 -1 5 -5 2 -9 2 -9 1 -10 2 -4 2 -2 0 -3 -5 -2 -6 -5 -4 -5 -7 -4 -4 -2 -6 -5 -4 -3 -4 -8 -3 -4 -8 -1 -6 -3 -6 -3 -6 3 -8 -3 -10 -6 -1 -11 1 4 -5 3 -5 12 -3 2 -1 4 -3 10 -4 6 -1 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=서초구">
              <path
                id="CD11650"
                className={outLineStyle}
                d="M 460 413 l 1 0 2 -3 6 9 1 6 0 1 3 9 5 15 5 13 6 17 7 10 6 -1 5 5 1 3 4 9 7 13 3 5 6 -2 4 0 6 -1 9 -2 8 -4 5 -3 2 -2 11 0 4 8 2 3 5 6 2 7 4 4 1 7 -5 8 -6 10 0 6 -6 4 -4 4 -5 0 -4 -1 -4 0 -2 6 -2 8 -1 4 -1 2 1 3 -4 0 -10 2 -9 0 -8 0 -7 -4 -4 -6 -5 -5 -4 -2 -5 -4 1 -5 2 -4 -1 -8 0 -5 -2 -4 2 -5 0 -1 -3 -4 -2 -9 -2 -6 -5 0 -2 7 -3 6 -6 4 -8 2 -4 1 -2 0 -6 -3 -3 -3 0 0 -1 -2 -3 -6 -2 -8 -8 -2 -5 3 1 3 0 1 -4 4 -6 3 -4 3 -1 -5 0 -11 -3 -4 -4 -6 -2 -8 0 -9 0 -8 1 -11 0 -6 2 -11 -2 -8 -4 -5 0 0 3 -4 7 -3 5 -8 8 -8 5 -3 5 -4 5 -5 5 -4 3 -4 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=강남구">
              <path
                id="CD11680"
                className={outLineStyle}
                d="M 503 387 l 10 3 4 4 5 3 7 4 7 4 12 5 0 10 0 4 1 13 1 6 1 10 6 2 7 1 6 2 3 2 12 4 5 2 5 3 6 3 5 4 5 5 3 6 3 5 3 5 4 7 2 2 5 10 3 4 4 5 -10 11 -2 6 -4 0 -3 -4 -9 -2 -4 0 0 2 -1 1 -3 3 -11 3 -1 -7 -4 -4 -2 -7 -5 -6 -2 -3 -4 -8 -11 0 -2 2 -5 3 -8 4 -9 2 -6 1 -4 0 -6 2 -3 -5 -7 -13 -4 -9 -1 -3 -5 -5 -6 1 -7 -10 -6 -17 -5 -13 -5 -15 -3 -9 0 -1 -1 -6 -6 -9 -2 3 -1 0 -7 -6 5 -6 4 -5 4 -5 8 -4 12 0 7 0 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=송파구">
              <path
                id="CD11710"
                className={outLineStyle}
                d="M 621 374 l 6 2 4 2 4 4 0 8 -2 5 -1 3 0 7 5 2 8 5 5 3 8 4 3 2 5 3 5 2 -4 3 0 6 -3 10 4 5 5 3 10 0 9 3 5 5 -1 4 -2 7 -3 9 -4 3 -5 4 -5 5 -2 6 -3 7 -5 5 -10 0 -6 0 0 8 -4 5 -6 -2 -2 -1 -1 4 -4 -5 -3 -4 -5 -10 -2 -2 -4 -7 -3 -5 -3 -5 -3 -6 -5 -5 -5 -4 -6 -3 -5 -3 -5 -2 -12 -4 -3 -2 -6 -2 -7 -1 -6 -2 -1 -10 -1 -6 -1 -13 0 -4 0 -10 6 2 5 1 5 1 5 -1 6 -3 8 -5 3 -2 3 -3 11 -12 5 -4 5 -5 4 -5 z "
              ></path>
            </Link>
            <Link href="/map-search?borough=강동구">
              <path
                id="CD11740"
                className={outLineStyle}
                d="M 726 320 l 1 7 3 9 0 9 1 9 1 10 1 5 -1 -1 -5 -1 -3 0 -4 2 -11 0 -8 1 -5 6 -4 5 -4 6 -2 4 -1 8 -4 7 -3 2 1 1 -1 2 -6 7 -1 8 -5 -2 -5 -3 -3 -2 -8 -4 -5 -3 -8 -5 -5 -2 0 -7 1 -3 2 -5 0 -8 -4 -4 -4 -2 -6 -2 -7 0 2 -4 2 -5 2 -10 4 -10 1 -1 4 -6 7 -6 5 -3 6 -3 8 -3 4 -1 5 0 11 0 9 -4 7 -5 8 -6 11 -6 11 0 0 7 3 6 z "
              ></path>
            </Link>
          </g>
          <g filter="url(#dropshadow2)">
            <Link href="/map-search?borough=종로구">
              <text
                id="LCD11110"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="399"
                y="277"
              >
                종로구
              </text>
            </Link>
            <Link href="/map-search?borough=중구">
              <text
                id="LCD11140"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="433"
                y="338"
              >
                중구
              </text>
            </Link>
            <Link href="/map-search?borough=용산구">
              <text
                id="LCD11170"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="407"
                y="395"
              >
                용산구
              </text>
            </Link>
            <Link href="/map-search?borough=성동구">
              <text
                id="LCD11200"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="505"
                y="356"
              >
                성동구
              </text>
            </Link>
            <Link href="/map-search?borough=광진구">
              <text
                id="LCD11215"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="577"
                y="365"
              >
                광진구
              </text>
            </Link>
            <Link href="/map-search?borough=동대문구">
              <text
                id="LCD11230"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="528"
                y="294"
              >
                동대문구
              </text>
            </Link>
            <Link href="/map-search?borough=중랑구">
              <text
                id="LCD11260"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="589"
                y="270"
              >
                중랑구
              </text>
            </Link>
            <Link href="/map-search?borough=성북구">
              <text
                id="LCD11290"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="466"
                y="258"
              >
                성북구
              </text>
            </Link>
            <Link href="/map-search?borough=강북구">
              <text
                id="LCD11305"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="459"
                y="181"
              >
                강북구
              </text>
            </Link>
            <Link href="/map-search?borough=도봉구">
              <text
                id="LCD11320"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="494"
                y="125"
              >
                도봉구
              </text>
            </Link>
            <Link href="/map-search?borough=노원구">
              <text
                id="LCD11350"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="560"
                y="153"
              >
                노원구
              </text>
            </Link>
            <Link href="/map-search?borough=은평구">
              <text
                id="LCD11380"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="323"
                y="218"
              >
                은평구
              </text>
            </Link>
            <Link href="/map-search?borough=서대문구">
              <text
                id="LCD11410"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="342"
                y="302"
              >
                서대문구
              </text>
            </Link>
            <Link href="/map-search?borough=마포구">
              <text
                id="LCD11440"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="293"
                y="339"
              >
                마포구
              </text>
            </Link>
            <Link href="/map-search?borough=양천구">
              <text
                id="LCD11470"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="209"
                y="421"
              >
                양천구
              </text>
            </Link>
            <Link href="/map-search?borough=강서구">
              <text
                id="LCD11500"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="156"
                y="334"
              >
                강서구
              </text>
            </Link>
            <Link href="/map-search?borough=구로구">
              <text
                id="LCD11530"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="199"
                y="470"
              >
                구로구
              </text>
            </Link>
            <Link href="/map-search?borough=금천구">
              <text
                id="LCD11545"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="279"
                y="537"
              >
                금천구
              </text>
            </Link>
            <Link href="/map-search?borough=영등포구">
              <text
                id="LCD11560"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="295"
                y="413"
              >
                영등포구
              </text>
            </Link>
            <Link href="/map-search?borough=동작구">
              <text
                id="LCD11590"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="361"
                y="461"
              >
                동작구
              </text>
            </Link>
            <Link href="/map-search?borough=관악구">
              <text
                id="LCD11620"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="353"
                y="529"
              >
                관악구
              </text>
            </Link>
            <Link href="/map-search?borough=서초구">
              <text
                id="LCD11650"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="481"
                y="515"
              >
                서초구
              </text>
            </Link>
            <Link href="/map-search?borough=강남구">
              <text
                id="LCD11680"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="533"
                y="464"
              >
                강남구
              </text>
            </Link>
            <Link href="/map-search?borough=송파구">
              <text
                id="LCD11710"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="624"
                y="448"
              >
                송파구
              </text>
            </Link>
            <Link href="/map-search?borough=강동구">
              <text
                id="LCD11740"
                className="TEXT hover:fill-yellow-400"
                textAnchor="middle"
                alignmentBaseline="middle"
                x="675"
                y="358"
              >
                강동구
              </text>
            </Link>
          </g>
        </svg>
      </div>
    </div>
  );
}
