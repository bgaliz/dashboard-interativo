export default function Section({children}) {
    return (
        <section 
            className="
                w-100
                h-[100%]
                min-h-[250px] 
                p-8 
                border-[1px] 
                mt-5 mb-5
                rounded-[12px] 
                dark:border-[1px]
                flex
                justify-center
                items-center
            "
        >
            {children}
        </section>
    )
}