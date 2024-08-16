export default function ReservationStatusBadge({
  text,
  type,
}: {
  text: string;
  type: "confirmed" | "declined";
}) {
  const classNameVariants = {
    confirmed: " bg-orange-100 text-orange-200",
    declined: "bg-[#FFE4E0] text-[#FF472E]",
  };

  return (
    <section className="place-self-end">
      <div
        className={`${classNameVariants[type]} flex h-[44px] w-[82px] items-center justify-center rounded-[26px] font-bold`}
      >
        {text}
      </div>
    </section>
  );
}
