import * as React from "react"

export interface DropdownProps {
    title: string,
    rows: React.ReactNode[],
    /**
     * Gets called when the dropdown opens or closes with the current state.
     * @param {boolean} isOpen `true` means it is now open.
     * @returns {void} Function must not return a value
     */
    onOpenChange?: (isOpen: boolean) => void;
}

export function Dropdown({ rows, title, onOpenChange }: DropdownProps) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(true)
        if (onOpenChange) {
            onOpenChange(open)
        }
    }

    function handleClose() {
        setOpen(false)
        if (onOpenChange) {
            onOpenChange(open)
        }
    }

    return (
        <div className="w-full" onMouseEnter={handleOpen} onMouseLeave={handleClose} >
            <button className="w-full h-4" >{title}</button>
            <div className={`flex flex-col w-full ${!open ? "hidden" : "visible"}`}>
                {rows.map((element, index) => (
                    <div key={index} className="bg-transparent hover:bg-primary-950 opacity-20">
                        {element}
                    </div>
                ))}
            </div>
        </div>
    )
}