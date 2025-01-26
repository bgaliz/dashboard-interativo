import Header from "@/components/header/header_component";
import Section from "@/components/section/section_component"

import { FolderXIcon } from "lucide-react"

export default function Dashboard() {
    

    return (
        <>
            <Header text_header={"Dashboard"} />
            <div className='flex flex-col pt-6'>
                <Section>
                    <div className="flex flex-col text-center justify-center items-center h-[100%] gap-8">
                        <FolderXIcon className="w-[40px] h-[40px]" />
                        <div>
                            <h3>Não há nenhum tipo de projeto cadastrado.</h3>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className="w-[100%] h-[100%] flex justify-start">
                        <h2>Projetos</h2>
                    </div>
                </Section>
            </div>
        </>
    )
}