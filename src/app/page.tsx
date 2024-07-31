import Chips from "./components/Chips";

export default function Home() {
  return (
    <>
      <div className="text-3xl font-bold text-primary">font test</div>
      <div className="bg-overlay text-lg font-medium text-orange-200">
        font test
      </div>
      <span className="center-block w-1/2 text-center text-xl font-semibold text-gray-400">
        font test
      </span>
      <span className="center-block w-1/2 text-center text-xl font-semibold text-gray-400">
        <span className="visually-hidden">찜하기</span>
      </span>
      <Chips type="remaining" counting={2} />
      <Chips type="reservation" counting={2} />
      <Chips type="completed" counting={2} />
      <Chips type="confirmation" counting={2} />
      <Chips type="confirmed" counting={2} />
    </>
  );
}
