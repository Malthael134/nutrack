import * as React from "react"

export interface DropdownProps {
    title: string,
    rows: React.ReactNode[],
}

export function Dropdown({ rows, title }: DropdownProps) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className="w-full">
            <button className="w-full h-4" onMouseOver={handleOpen}>{title}</button>
            <div className="flex flex-col w-full">
                {rows.map(v => (
                    <div className="bg-transparent hover:bg-primary-950 opacity-20">
                        {v}
                    </div>
                ))}
            </div>
        </div>
    )
}