"use client";

import { startTransition, useId, useOptimistic, useState } from "react";

export default function TDDPage() {
    const [likeCount, setLikeCount] = useState(0);
    const id = useId();
    const id2 = useId();
    type OptimisticAction =
        | { type: "like"; delta: 1 }
        | { type: "unlike"; delta: -1 }
        | { type: "rollback"; delta: 1 | -1 };

    const [optimisticLikeCount, dispatch] = useOptimistic(
        likeCount,
        (state: number, action: OptimisticAction) => {
            switch (action.type) {
                case "like":
                case "unlike":
                    return state + action.delta;
                case "rollback":
                    return state - action.delta;
                default:
                    return state;
            }
        },
    );

    const getAPI = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 1;
    }

    const handleLike = () => {
        startTransition(async () => {
            dispatch({ type: "like", delta: 1 });
            try {
                await getAPI();
                setLikeCount((prev) => prev + 1);
            } catch {
                dispatch({ type: "rollback", delta: 1 });
            }
        });
    }

    const handleUnlike = () => {
        startTransition(async () => {
            dispatch({ type: "unlike", delta: -1 });
            try {
                await getAPI();
                setLikeCount((prev) => prev - 1);
            } catch {
                dispatch({ type: "rollback", delta: -1 });
            }
        });
    }

    const Section = ({ children }: { children: React.ReactNode }) => {
        return (
            <section className="p-4">
                <h2 className="text-2xl font-bold">Section</h2>
                {children}
            </section>
        )
    }
    return (

        <div>
            <div>
                <button onClick={handleLike}>like</button>
                <button onClick={handleUnlike}>unlike</button>
                <p>{optimisticLikeCount}</p>
            </div>
            <div>
                <button onClick={() => {

                    console.log(id);
                    console.log(id2);
                }}>test</button>
            </div>
        </div>
    )
}