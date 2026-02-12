
import React, { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  active: boolean;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, active }) => {
  return (
    <div className={`w-full h-full flex flex-col justify-center transition-all duration-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
      {children}
    </div>
  );
};
