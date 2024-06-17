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
        setOpen(!open)
        if (onOpenChange) {
            onOpenChange(open)
        }
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