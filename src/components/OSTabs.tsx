"use client";

import { useState, ReactNode } from "react";

type OS = "Windows" | "Linux" | "MacOS";

interface OSTabsProps {
    children: (os: OS) => ReactNode;
}

export default function OSTabs({ children }: OSTabsProps) {
    const [activeOS, setActiveOS] = useState<OS>("Windows");

    return (
        <div className="my-8">
            <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-lg">
                    {(["Windows", "Linux", "MacOS"] as OS[]).map((os) => (
                        <button
                            key={os}
                            onClick={() => setActiveOS(os)}
                            className={`
                relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeOS === os
                                    ? "text-white shadow-md bg-indigo-600"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                                }
              `}
                        >
                            <div className="flex items-center gap-2">
                                {/* Simple OS Icons (Optional, using text for cleaner look or adding SVGs later) */}
                                {os}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area with simple fade-in effect key using activeOS to trigger re-render animation */}
            <div key={activeOS} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                {children(activeOS)}
            </div>
        </div>
    );
}
