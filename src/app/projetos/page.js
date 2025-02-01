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
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from 'react-hook-form';
import { SelectTrigger } from "@radix-ui/react-select";

import {CircleChevronRightIcon} from "lucide-react"
import { SelectComponent } from "@/components/select/select_component";
import { DatePicker } from "@/components/datepicker/datepicker_component";
import { useStore } from "@/store/store";
import { Badge } from "@/components/ui/badge";

const RESPONSAVEIS = [
    {key: 'sergio', name: 'Sérgio'},
    {key: 'rodrigo', name: 'Rodrigo'},
    {key: 'vanessa', name: 'Vanessa'},
    {key: 'carlos', name: 'Carlos'},
]

export default function Projetos(){
    const [open, setOpen] = useState(false)
    const createProject = useStore((state) => state.createProject)
    const projects = useStore((state) => state.projects)

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        responsable: '',
    });

    const onSubmit = (data) => {
        reset();
        setOpen(!open)
        projects.push(data)
        createProject(projects)
    }

    const status = useCallback((date) => {
        return new Date() < new Date(date) ? 'Ativo' : 'Atrasado'
    }, [projects])

    const variant = useCallback((date) => {
        return new Date() < new Date(date) ? 'Ativo' : 'destructive'
    }, [projects])

    useEffect(() => {
        console.log('projects', projects)
    }, [projects])

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
                                    <DatePicker
                                        size="medium"
                                        name="startDate"
                                        control={control}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label> Data Fim:</Label>
                                    <DatePicker
                                        size="medium"
                                        name="endDate"
                                        control={control}
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

                <div className="mt-10">
                    {
                        projects.map(project => (
                            <div key={project.name} >
                                <div className="grid grid-cols-2">
                                    <span className="text-xs">Nome do Projeto</span>
                                    <span className="text-xs">Status</span>
                                    <span className="text-xs"></span>
                                </div>
                                <div
                                    className="border-[1px] rounded-[8px] my-3 p-4 cursor-pointer hover:scale-[1.01] duration-200"
                                >
                                    <div className="grid grid-cols-3">
                                        <span>{project.name}</span>
                                        <Badge variant={variant(project.endDate)} className='w-auto'>{status(project.endDate)}</Badge>
                                        <CircleChevronRightIcon />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}