"use client";

import { useState } from "react";

export default function CounterButton() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p aria-label="count">{count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
    );
}
