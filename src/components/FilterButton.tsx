import React from 'react';

interface FilterButtonProps{
  icon?: React.ReactNode;
}


export default function FilterButton({icon}: FilterButtonProps) {
  return (
    <button
    type="button"
    className="bg-primary hover:bg-primary-hover shadow-md pl-2 rounded-md w-9 h-9 text-neutral-50 hover:scale-105 transition-transform duration-200"
  >
    {icon}
  </button>
  
  );
}
