"use client";
import { useState } from "react";

type GetUserFn = () => { name: string }[];

export default function Counter() {
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
