import React from 'react'
import { useId } from 'react'

export default function Input({ className, label, ...props }) {
  const id = useId()
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center mb-3'>
        <label className='text-gray-700 font-semibold text-xl' htmlFor={id}>
          {label}
        </label>
        <input
          className={`${className} max-w-sm bg-gray-200 text-red-700 rounded-sm shadow-inner hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-red-700 p-2 placeholder:text-red-700`}
          {...props}
        />
      </div>
    </React.Fragment>
  )
}
