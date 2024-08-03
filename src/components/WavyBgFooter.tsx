"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBgFooter({ id }: { id: string }) {
    return (
        <WavyBackground id={id} className="max-w-4xl mx-auto pb-40 " >
            <div className="text-white">Footer</div>
        </WavyBackground>
    );
}
