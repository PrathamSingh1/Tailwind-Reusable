import React from 'react'

export const Grid = () => {
  return (
    <div className='max-w-5xl mx-auto border-x border-neutral-200 bg-gray-200 min-h-screen'>
        <div className='grid grid-cols-6'>
            <div className='h-40 w-40 bg-red-500' />
            <div className='h-40 w-40 bg-green-500' />
            <div className='h-40 w-40 bg-yellow-500' />
            <div className='h-40 w-40 bg-orange-500' />
            <div className='h-40 w-40 bg-blue-500' />
            <div className='h-40 w-40 bg-cyan-500' />
        </div>
    </div>
  )
}
