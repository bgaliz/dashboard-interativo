'use client'
import React from 'react';
import Aside from '../aside_menu/aside_menu_component';

export default function Layout({children}) {
  return (
    <div className='min-h-screen dark:bg-background bg-background'>
        <div className='flex flex-row w-100 h-100'>
            <Aside/>            
            <main className='w-[100%] h-[100%] p-8'>
              {children}
            </main>
        </div>
    </div>
  )
};