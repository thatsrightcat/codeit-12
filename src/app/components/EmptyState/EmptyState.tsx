import React from 'react';
import Image from 'next/image';
import Empty from "@icons/icon_empty.svg";

interface EmptyStateProps {
  children: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ children }) => {
  return (
    <div className="mt-16 flex flex-col items-center xl:mt-20">
      <Image
        src={Empty}
        alt="더보기 버튼"
        width={200}
        height={200}
        className="md:h-60 md:w-60"
      />
      <p className="mt-3 text-2xl font-medium text-gray-700 xl:mt-5">
        {children}
      </p>
    </div>
  );
};

export default EmptyState;