import { Dropdown } from "./Dropdown"

export default function WikiDropdown() {
    return (
        <Dropdown
            title="Wiki"
            rows={[
                (<a href="/wiki/nutrients">Nutrients</a>)
            ]}
        />
    )
}