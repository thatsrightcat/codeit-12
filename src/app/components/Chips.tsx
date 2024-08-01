interface ChipsProps {
  type:
    | "remaining"
    | "reservation"
    | "completed"
    | "confirmation"
    | "confirmed";
  counting: number;
}

const CHIPS_STYLES = {
  remaining: "bg-white text-blue-300",
  reservation: "bg-blue-300 text-white",
  completed: "bg-gray-300 text-gray-800",
  confirmation: "bg-orange-100 text-orange-200",
  confirmed: "bg-orange-100 text-orange-200",
};

const CHIPS_TYPES = {
  remaining: "잔여",
  reservation: "예약",
  completed: "완료",
  confirmation: "확정",
  confirmed: "승인",
};

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
  return (
    <div
      className={`flex h-[1.25rem] w-full items-center rounded px-1 py-[0.1875rem] text-xs font-medium md:h-[1.4375rem] md:text-md xl:h-[1.4375rem] ${CHIPS_STYLES[type]}`}
    >
      <span className="mr-0.5">{CHIPS_TYPES[type]}</span>
      <span>{counting}</span>
    </div>
  );
}
