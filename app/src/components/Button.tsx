import { useState } from "react"

export default function Button() {
    const [count, setCount] = useState(0);

    return (
        <button
            className="text-xl"
            onClick={() => {
                setCount((prevCount) => prevCount + 1)
            }}
        >
            Count: {count}
        </button>
    )
}