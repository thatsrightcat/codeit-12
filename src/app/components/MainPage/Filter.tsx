interface FilterProps {
  isOpen: boolean;
}
const Filter = ({ isOpen }: FilterProps) => {
  return (
    <div
      className="absolute flex flex-col"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <button
        className="h-[41px] w-[90px] rounded-t-[6px] border border-primary bg-white hover:bg-primary hover:text-white md:h-[58px] md:w-[120px] xl:w-[127px]"
        type="button"
      >
        가격 낮은 순
      </button>
      <button
        className="h-[41px] w-[90px] rounded-b-[6px] border border-primary bg-white hover:bg-primary hover:text-white md:h-[58px] md:w-[120px] xl:w-[127px]"
        type="button"
      >
        가격 높은 순
      </button>
    </div>
  );
};

export default Filter;
