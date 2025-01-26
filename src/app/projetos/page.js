'use client'
import Header from "@/components/header/header_component";
import Section from "@/components/section/section_component";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modal/modal_component";
import { useCallback, useState } from "react";
import { useForm } from 'react-hook-form';
import { SelectTrigger } from "@radix-ui/react-select";

import {ChevronDownIcon} from "lucide-react"
import { SelectComponent } from "@/components/select/select_component";
import { DatePicker } from "@/components/datepicker/datepicker_component";

const RESPONSAVEIS = [
    {key: 'sergio', name: 'Sérgio'},
    {key: 'rodrigo', name: 'Rodrigo'},
    {key: 'vanessa', name: 'Vanessa'},
    {key: 'carlos', name: 'Carlos'},
]

export default function Projetos(){
    const [open, setOpen] = useState(false)
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        responsable: '',
    });

    const onSubmit = (data) => {
        console.log(data)
        reset();
        setOpen(!open)
    }

    return(
        <>
            <Header text_header={"Projetos"}/>
            <div className="mt-5 mb-5 pt-10">
                <div className="flex justify-between">
                    <h3 className="font-bold">Meus Projetos</h3>
                    <Modal 
                        isOpen={open}
                        onOpenChange={setOpen}
                        textButton="Criar Projeto"
                        textHeader="Cadastrar Projeto"
                        textSaveData="Salvar"
                        onClick={handleSubmit(onSubmit)}
                        textDescription="Preencha os dados do seu novo projeto para cadastro."
                    >
                       <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                placeholder="Nome do projeto"
                                className="my-5" 
                                {...register("name", {required: true})}
                            />
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-3">
                                    <Label> Data início:</Label>
                                    {/* <Input
                                        placeholder="Nome do projeto"
                                        className="mt-2 w-[150px]" 
                                        type="date"
                                        {...register("startDate", {required: true})}
                                    /> */}
                                    <DatePicker 
                                        size="medium"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label> Data Fim:</Label>
                                    {/* <Input
                                        placeholder="Nome do projeto"
                                        className="mt-2 w-[150px]" 
                                        type="date"
                                        {...register("endDate", {required: true})}
                                    /> */}

                                    <DatePicker 
                                        size="medium"
                                    />
                                </div>
                            </div>
                            <Input
                                placeholder="Descrição do projeto"
                                className="my-5" 
                                {...register("description", {required: true})}
                            />
                            <SelectComponent 
                                control={control}
                                arrayValue={RESPONSAVEIS}
                                placeholder="Responsáveis"
                                nameController="responsable"
                                textLabel="Selecione o responsável:"
                            />
                        </form>
                    </Modal>
                </div>
            </div>
        </>
    )
}