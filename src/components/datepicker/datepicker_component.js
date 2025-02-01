"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm, Controller } from "react-hook-form";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({size, name, control}) {    
    const [date, setDate] = React.useState()

    const sizeButton = React.useMemo(() => {
        if(size === "full") return "w-full"
        if(size === "medium") return "w-[180px]"
    }, [size])

    const disableDate = (date) => {
        if(name === "endDate") {
            return date < new Date(control._formValues.startDate)
        }
    }

    const formatDate = (date) => {
        return new Date(date.toString()).toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric' })
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => 
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                            `${sizeButton} justify-start text-left font-normal`,
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {date ? formatDate(date) : <span>Selecione a data</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                                setDate(date.toDateString())
                                field.onChange(date.toDateString())
                            }}
                            initialFocus
                            disabled={(date) => disableDate(date)}
                        />
                    </PopoverContent>
                </Popover>
            }
        />
    )
}
