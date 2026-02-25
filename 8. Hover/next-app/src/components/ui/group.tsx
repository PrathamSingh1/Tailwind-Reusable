import React from 'react'

export const Group = ({ children }: {
    children: React.ReactNode;
}) => {
  return (
    <div className='flex flex-col gap-2'>{children}</div>
  )
};
