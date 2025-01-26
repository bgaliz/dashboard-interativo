'use client'

export default function Header({text_header}) {
    return (
        <div className='w-100 h-100 flex flex-row justify-between'>
            <header className="text-3xl font-bold text-gray-800 dark:text-white">{text_header}</header>
        </div>
    )
}