import { Select, SelectGroup, SelectItem, SelectValue, SelectContent,SelectLabel, SelectTrigger } from "@/components/ui/select";
import { useController } from "react-hook-form";

export function SelectComponent({arrayValue, nameController, control, placeholder, textLabel}) {
    const {
        field
    } = useController({
        name: nameController,
        control: control,
        rules: { required: true },
    });

    return (
        <Select onValueChange={field.onChange}>
            <SelectTrigger className="flex justify-between w-full border rounded-[8px] my-5">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    <SelectLabel>{textLabel}</SelectLabel>
                    {
                        arrayValue && 
                        arrayValue.map((value) => (
                            <SelectItem key={value.key} value={value.key}>{value.name}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}