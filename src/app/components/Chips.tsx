interface ChipsProps {
  type: string;
  counting: number;
}

/**
 * @type
 * 잔여: remaining
 * 예약: reservation
 * 완료: completed
 * 확정: confirmation
 * 승인: confirmed
 * @counting
 * 개수
 */

export default function Chips({ type, counting }: ChipsProps) {
  switch (type) {
    // 잔여
    case "remaining":
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-white px-1 py-[0.1875rem] text-xs font-medium text-blue-300 md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">잔여</span>
          <span className="">{counting}</span>
        </div>
      );
    // 예약
    case "reservation":
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-blue-300 px-1 py-[0.1875rem] text-xs font-medium text-white md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">예약</span>
          <span className="">{counting}</span>
        </div>
      );
    // 완료
    case "completed":
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-gray-300 px-1 py-[0.1875rem] text-xs font-medium text-gray-800 md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">완료</span>
          <span className="">{counting}</span>
        </div>
      );
    // 확정
    case "confirmation":
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-orange-100 px-1 py-[0.1875rem] text-xs font-medium text-orange-200 md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">확정</span>
          <span className="">{counting}</span>
        </div>
      );
    // 승인
    case "confirmed":
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-orange-100 px-1 py-[0.1875rem] text-xs font-medium text-orange-200 md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">승인</span>
          <span className="">{counting}</span>
        </div>
      );
    default:
      return (
        <div className="flex h-[1.25rem] w-[2.8125rem] items-center rounded bg-white px-1 py-[0.1875rem] text-xs font-medium text-blue-300 md:h-[1.4375rem] md:w-[3.625rem] md:text-md xl:h-[1.4375rem] xl:w-[6.875rem] xl:text-md">
          <span className="mr-0.5">예약상태</span>
          <span className="">0</span>
        </div>
      );
  }
}
