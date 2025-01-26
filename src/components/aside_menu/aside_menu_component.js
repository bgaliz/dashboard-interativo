import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from "lucide-react"

import { ArrowLeftFromLine, House, Folder } from "lucide-react"

export default function Aside() {
    const [darkMode, setDarkMode] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleDarkMode = useCallback(() => {
        setDarkMode(!darkMode)
        document.body.className = darkMode ? "dark" : "light";
    },[darkMode])    
    
    const Subtitle = ({subtitle}) => {
        return (
            <h4 className={`${opened ? 'text-center' : 'text-start'} text-gray-300 dark:text-gray-500 text-xs mb-3 mt-5`}>
                {subtitle}
            </h4>
        )
    }

    const Row = ({children}) =>{
        return (
            <div className={`w-[100%] flex ${opened ? 'justify-center' : 'justify-start'}`}>
                {children}
            </div>
        )
    }

    const Group = ({children}) => {
        return (
            <div className={`${!opened ? 'pl-4 mb-10' : ''} flex flex-col`}>
                {children}
            </div>
        )
    }

    const Text = ({text}) => {
        return !opened && <p className={`${opened ? "opacity-0" : "opacity-1"} transition-opacity ease-in-out delay-150 duration-200`}>{text}</p>
    }

    useEffect(() => {
        const theme_mode = document.body.classList.toString();
        document.body.className = theme_mode;
    }, [darkMode])

    useEffect(() => {
        handleDarkMode()
    }, [])
    
    return (
        <aside className={`
            w-[${opened ? '80px': '220px'}]
            h-screen
            pt-8
            pl-4
            pr-4
            border-r-[1px]
            transition-width
            ease-in-out
            delay-350
            duration-200
        `}>
            <div className='mt-8'>
                <div 
                    className={`flex flex-row w-[100%] ${opened ? 'justify-center' : 'justify-end'} mt-2`}
                    onClick={() => setOpened(!opened)}
                >
                    <ArrowLeftFromLine className='w-[28px] h-[28px] text-gray-400 border rounded-[6px] p-1 cursor-pointer dark:hover:text-gray-200 hover:text-gray-500 hover:border-gray-400'/>
                </div>
                <Subtitle subtitle="Menus"/>
                <Group>
                    <Row>
                        <Link href="/#" className='flex gap-2 my-2 font-bold text-sm text-foreground'>
                            <House className='w-[20px] h-[20px]'/> 
                            <Text text="Home"/>
                        </Link>
                    </Row>
                    <Row>
                        <Link href="/projetos" className='flex gap-2 my-2 font-bold text-sm text-foreground'>
                            <Folder className='w-[20px] h-[20px]'/>
                            <Text text="Projetos"/>
                        </Link>
                    </Row>
                </Group>
                <Subtitle subtitle="Light / Dark Mode"/>
                <Group>
                    <Row>
                        <button 
                            className='w-[80px] flex justify-center border border-1 rounded-[8px] hover:border-gray-400'
                            onClick={handleDarkMode}
                        >
                            {darkMode && <Sun className="h-[1.2rem] w-[1.2rem] dark:bg-black text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
                            {!darkMode && <Moon className="text-foreground h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
                        </button>
                    </Row>
                </Group>
            </div>
        </aside>
    )
}