import {Holidays} from "@/components/Holidays";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-12">
            <div className="z-5 items-center justify-between font-mono text-sm flex">
                <Holidays/>
            </div>
        </main>
    )
}
