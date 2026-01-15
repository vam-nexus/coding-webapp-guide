import Link from "next/link";

interface InstructionSectionProps {
    title: string;
    description?: string;
    link?: string;
    linkText?: string;
    command?: string;
    verificationCommand?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

export default function InstructionSection({
    title,
    description,
    link,
    linkText = "Official Download",
    command,
    verificationCommand,
    children,
    footer,
}: InstructionSectionProps) {
    return (
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                    {description && <p className="text-slate-600 leading-relaxed">{description}</p>}
                </div>
                {link && (
                    <Link
                        href={link}
                        target="_blank"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium text-blue-700 hover:text-blue-900 hover:border-blue-500/50 group"
                    >
                        {linkText}
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                )}
            </div>

            {children}

            <div className="space-y-6 mt-6">
                {command && (
                    <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                        {/* Fake Terminal Header */}
                        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-xs text-slate-400 font-mono tracking-wider">INSTALLATION</div>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <code className="text-sm font-mono text-emerald-400 whitespace-pre">{command}</code>
                        </div>
                    </div>
                )}

                {verificationCommand && (
                    <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs text-slate-400 font-mono tracking-wider">VERIFY</span>
                            </div>
                        </div>
                        <div className="p-4 overflow-x-auto relative">
                            <div className="absolute left-0 top-4 bottom-4 w-1 bg-blue-500/20"></div>
                            <code className="text-sm font-mono text-blue-300 whitespace-pre pl-4 block">
                                <span className="text-slate-500 select-none">$ </span>
                                {verificationCommand}
                            </code>
                        </div>
                    </div>
                )}
            </div>

            {footer}
        </div>
    );
}
