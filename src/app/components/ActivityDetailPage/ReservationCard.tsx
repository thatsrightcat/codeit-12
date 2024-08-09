"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ReservationCardProps {
  price: number;
}

export default function ReservationCard({ price }: ReservationCardProps) {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  return (
    <div className="">
      <div>
        <p>{price}원</p>
      </div>
      <div>
        <h2>날짜</h2>
        <div className="">
          <Calendar value={date} />
        </div>
        {/* <div>
          <h2>예약 가능한 시간</h2>
          <div>스케쥴 시간 출력</div>
        </div> */}
      </div>
      <div>
        <h2>참여 인원 수</h2>
        <div>
          <button>-</button>
          <input />
          <button>+</button>
          <div>
            <button>예약하기</button>
          </div>
        </div>
        <div>
          <h2>총합계</h2>
          <p>총가격 출력 영역</p>
        </div>
      </div>
    </div>
  );
}
