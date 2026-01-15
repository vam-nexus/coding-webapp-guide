"use client";

import { useEffect, useState } from "react";
import InstructionSection from "@/components/InstructionSection";

type OS = "Windows" | "Linux" | "MacOS";

const toolIds = [
  "tool-node",
  "tool-git",
  "tool-vscode",
  "tool-docker",
  "tool-uv",
  "tool-gh",
];

const sectionIds = [
  "intro",
  "os-selection",
  "accounts-access",
  "software-stack",
  ...toolIds,
  "local-git",
  "final-verification",
  "troubleshooting",
];

export default function Home() {
  const [activeOS, setActiveOS] = useState<OS>("Windows");
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isSoftwareActive =
    activeSection === "software-stack" || toolIds.includes(activeSection);

  return (
    <main className="min-h-screen px-4 py-16 relative">
      {/* Background Decorative Blobs */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-sky-400/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed top-1/2 -right-40 w-96 h-96 bg-amber-300/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="lg:flex lg:gap-10">
          <aside className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Table of Contents
              </p>
              <nav className="space-y-2 text-sm text-slate-600">
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "intro" ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#intro"
                >
                  Overview
                </a>
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "os-selection" ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#os-selection"
                >
                  Operating System
                </a>
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "accounts-access" ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#accounts-access"
                >
                  Accounts and Access
                </a>
                <a
                  className={`block hover:text-slate-900 ${
                    isSoftwareActive ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#software-stack"
                >
                  Software Stack
                </a>
                <div className="pl-4 space-y-1 text-xs text-slate-500">
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-node" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-node"
                  >
                    Node.js (LTS)
                  </a>
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-git" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-git"
                  >
                    Git
                  </a>
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-vscode" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-vscode"
                  >
                    VS Code
                  </a>
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-docker" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-docker"
                  >
                    Docker Desktop
                  </a>
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-uv" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-uv"
                  >
                    uv (Python)
                  </a>
                  <a
                    className={`block hover:text-slate-900 ${
                      activeSection === "tool-gh" ? "font-semibold text-slate-900" : ""
                    }`}
                    href="#tool-gh"
                  >
                    GitHub CLI
                  </a>
                </div>
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "local-git" ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#local-git"
                >
                  Local Git Setup
                </a>
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "final-verification"
                      ? "font-semibold text-slate-900"
                      : ""
                  }`}
                  href="#final-verification"
                >
                  Final Verification
                </a>
                <a
                  className={`block hover:text-slate-900 ${
                    activeSection === "troubleshooting" ? "font-semibold text-slate-900" : ""
                  }`}
                  href="#troubleshooting"
                >
                  Troubleshooting
                </a>
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
        {/* INTRO */}
        <header id="intro" className="mb-12 text-left space-y-4 scroll-mt-24">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Developer Environment Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Coding your Web Application
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl">
            Step-by-step setup to set your development environment. Follow the sections in order.
            Each step includes clear instructions, hints, and notes so you can
            install the tools and run the app without guessing.
          </p>

          <div className="glass-card rounded-2xl p-6">
            <p className="text-sm font-semibold text-slate-900 mb-3">
              Key objectives (what you will be able to do)
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
              <li>
                Run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">git</code> command
              </li>
              <li>
                Run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">gh</code> command
              </li>
              <li>
                Run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">docker</code> command
              </li>
              <li>
                Run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">npm</code> command
              </li>
              <li>
                Run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">uv</code> command
              </li>
              <li>
                Open VS Code and run the <code className="bg-slate-100 px-1.5 py-0.5 rounded">code</code> command
              </li>
              <li>Have your GitHub account fully connected (2FA + SSH + gh login)</li>
            </ul>
          </div>
        </header>

        {/* OS SELECTION */}
        <section id="os-selection" className="mb-16 scroll-mt-24">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Choose your operating system
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              The commands below change based on your selection. Pick the OS you
              are using right now.
            </p>
            <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
              {(["Windows", "Linux", "MacOS"] as OS[]).map((os) => (
                <button
                  key={os}
                  onClick={() => setActiveOS(os)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeOS === os
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    }`}
                >
                  {os}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CLOUD SETUP */}
        <section id="accounts-access" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide uppercase">
              01. Accounts and Access
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <InstructionSection
              title="GitHub Account + 2FA"
              description="Use your work email and enable two-factor authentication. This protects your account and is required for repo permissions."
              link="https://github.com/signup"
              linkText="Create or Sign In"
            >
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
                <p className="text-sm text-slate-700 mb-3 font-semibold">
                  Checklist
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                  <li>Verify your email address in GitHub settings.</li>
                  <li>Enable 2FA with an authenticator app or security key.</li>
                  <li>Set a recognizable name and profile photo.</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  2FA help: https://docs.github.com/en/authentication
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Hint
                </p>
                <p className="text-sm text-slate-700">
                  Use the same email you will use for Git commits to avoid mismatched identities.
                </p>
              </div>
            </InstructionSection>

            <InstructionSection
              title="SSH Keys"
              description="Set up a secure, password-less connection to GitHub. This avoids token prompts on every push."
              link="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"
              linkText="Full Documentation"
            >
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6">
                <p className="text-sm text-slate-700 mb-4 font-semibold">
                  Quick Setup Steps
                </p>
                <ol className="list-decimal list-inside space-y-3 text-slate-700 text-sm">
                  <li>Open your terminal.</li>
                  <li>
                    Generate a key:{" "}
                    <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">
                      ssh-keygen -t ed25519 -C "you@company.com"
                    </code>
                  </li>
                  <li>Accept the default file location (press Enter).</li>
                  <li>
                    Start the agent:{" "}
                    <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">
                      eval "$(ssh-agent -s)"
                    </code>
                  </li>
                  <li>
                    Add identity:{" "}
                    <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">
                      ssh-add ~/.ssh/id_ed25519
                    </code>
                  </li>
                </ol>
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-600 mb-2">
                  Display your public key and add it in GitHub Settings:
                </p>
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner p-4">
                  <code className="text-sm font-mono text-amber-300 whitespace-pre">
                    {activeOS === "Windows"
                      ? "type %userprofile%\\.ssh\\id_ed25519.pub"
                      : "cat ~/.ssh/id_ed25519.pub"}
                  </code>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Using: {activeOS}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-600 mb-2">
                  Test the connection (you should see a success message):
                </p>
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner p-4">
                  <code className="text-sm font-mono text-amber-300 whitespace-pre">
                    ssh -T git@github.com
                  </code>
                </div>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Hint
                </p>
                <p className="text-sm text-slate-700">
                  If you see "Permission denied", make sure your public key was added to GitHub.
                </p>
              </div>
            </InstructionSection>
          </div>
        </section>

        {/* SECTION: SOFTWARE INSTALLATION */}
        <section id="software-stack" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide uppercase">
              02. Software Stack
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div id="tool-node" className="scroll-mt-24">
              <InstructionSection
                title="Install Node.js (LTS)"
                description="Node.js runs the app and tooling. Use the LTS version for stability."
                link="https://nodejs.org/en/download"
                linkText="Download Node.js LTS"
                command={
                  activeOS === "Windows"
                    ? "Go to https://nodejs.org/en/download, click Windows Installer (LTS), run the .msi file."
                    : activeOS === "MacOS"
                      ? "Go to https://nodejs.org/en/download, click macOS Installer (LTS), open the .pkg file."
                      : "Go to https://nodejs.org/en/download, use the Linux installer for your distro."
                }
                verificationCommand="node --version"
              >
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                  <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                    Hint
                  </p>
                  <p className="text-sm text-slate-700">
                    Restart your terminal after installation to refresh your PATH.
                  </p>
                </div>
              </InstructionSection>
            </div>

            <div id="tool-git" className="scroll-mt-24">
              <InstructionSection
                title="Install Git"
                description="Git is required to clone repos and track code changes."
                link="https://git-scm.com/downloads"
                linkText="Download Git"
                command={
                  activeOS === "Windows"
                    ? "Go to https://git-scm.com/downloads, click Windows, run the installer."
                    : activeOS === "MacOS"
                      ? "Go to https://git-scm.com/downloads, click macOS, open the installer."
                      : "Go to https://git-scm.com/downloads, select your Linux package instructions."
                }
                verificationCommand="git --version"
              >
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                  <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                    Note
                  </p>
                  <p className="text-sm text-slate-700">
                    On macOS, Git may prompt you to install Command Line Tools. Click Install.
                  </p>
                </div>
              </InstructionSection>
            </div>

            <div id="tool-vscode" className="scroll-mt-24">
              <InstructionSection
                title="Install Visual Studio Code"
                description="VS Code is the recommended editor for this project."
                link="https://code.visualstudio.com/Download"
                linkText="Download VS Code"
                command={
                  activeOS === "Windows"
                    ? "Go to https://code.visualstudio.com/Download, download the Windows installer, run it."
                    : activeOS === "MacOS"
                      ? "Go to https://code.visualstudio.com/Download, download the macOS .zip, drag to Applications."
                      : "Go to https://code.visualstudio.com/Download, choose your Linux download, and install."
                }
                verificationCommand="code --version"
              >
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                  <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                    Hint
                  </p>
                  <p className="text-sm text-slate-700">
                    Install these extensions: "Python", "Pylance", and "Python Debugger".
                  </p>
                </div>
              </InstructionSection>
            </div>

            <div id="tool-docker" className="scroll-mt-24">
              <InstructionSection
                title="Install Docker Desktop"
                description="Docker is used for local services and integration tests."
                link="https://docs.docker.com/get-started/get-docker/"
                linkText="Download Docker Desktop"
                command={
                  activeOS === "Windows"
                    ? "Go to https://docs.docker.com/get-started/get-docker/, choose Windows, run the installer."
                    : activeOS === "MacOS"
                      ? "Go to https://docs.docker.com/get-started/get-docker/, choose macOS, open the .dmg."
                      : "Go to https://docs.docker.com/get-started/get-docker/, choose Linux and follow the steps."
                }
                verificationCommand="docker --version"
              >
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                  <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                    Note
                  </p>
                  <p className="text-sm text-slate-700">
                    After install, open Docker Desktop once and finish setup.
                  </p>
                </div>
              </InstructionSection>
            </div>

            <div id="tool-uv" className="scroll-mt-24">
              <InstructionSection
                title="Install uv (Python Manager)"
                description="uv is used for Python tooling and scripts in this project."
                link="https://docs.astral.sh/uv/getting-started/installation/"
                linkText="uv Install Docs"
                command={
                  activeOS === "Windows"
                    ? "Go to https://docs.astral.sh/uv/getting-started/installation/, copy the Windows PowerShell install command, run it."
                    : "Go to https://docs.astral.sh/uv/getting-started/installation/, copy the install command for your OS, run it."
                }
                verificationCommand="uv --version"
                footer={
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mt-6">
                    <p className="text-sm text-slate-700 mb-2 font-semibold">
                      After install (do this first)
                    </p>
                    <code className="text-sm font-mono text-slate-800 whitespace-pre">
                      uv python install 3.12
                    </code>
                  </div>
                }
              />
            </div>

            <div id="tool-gh" className="scroll-mt-24">
              <InstructionSection
                title="Install GitHub CLI (gh)"
                description="GitHub CLI is needed for the login step later and for cloning repos."
                link="https://cli.github.com/"
                linkText="Download GitHub CLI"
                command={
                  activeOS === "Windows"
                    ? "Go to https://cli.github.com/, click Download for Windows, run the installer."
                    : activeOS === "MacOS"
                      ? "Go to https://cli.github.com/, click Download for macOS, open the .pkg file."
                      : "Go to https://cli.github.com/, choose your Linux distro and follow the install steps."
                }
                verificationCommand="gh --version"
              />
            </div>
          </div>
        </section>

        {/* SECTION: LOCAL SETUP */}
        <section id="local-git" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide uppercase">
              03. Local Git Setup
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <InstructionSection
              title="Log in to GitHub CLI"
              description="Connect the GitHub CLI to your account so it can create and clone repos."
              link="https://cli.github.com/manual/gh_auth_login"
              linkText="gh auth login docs"
              command="gh auth login"
              verificationCommand="gh auth status"
            >
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Hint
                </p>
                <p className="text-sm text-slate-700">
                  Choose "Login with a web browser" and follow the on-screen code.
                </p>
              </div>
            </InstructionSection>

            <InstructionSection
              title="Set your Git identity"
              description="Commits should display your real name and work email."
              command={`git config --global user.name "Your Name"\ngit config --global user.email "you@company.com"`}
              verificationCommand="git config --global --list"
            >
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Hint
                </p>
                <p className="text-sm text-slate-700">
                  Use the same email you used for GitHub to match your commits.
                </p>
              </div>
            </InstructionSection>

            <InstructionSection
              title="Configure line endings"
              description="Avoid cross-platform line ending issues when switching between Windows and Unix systems."
              command={
                activeOS === "Windows"
                  ? "git config --global core.autocrlf true\ngit config --global core.safecrlf warn"
                  : "git config --global core.autocrlf input\ngit config --global core.safecrlf warn"
              }
              verificationCommand="git config --global core.autocrlf"
            >
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Note
                </p>
                <p className="text-sm text-slate-700">
                  These settings prevent strange diffs caused by line endings.
                </p>
              </div>
            </InstructionSection>

            <InstructionSection
              title="SSH config (optional)"
              description="Use a simple SSH config so GitHub always uses the correct key."
              command={
                activeOS === "Windows"
                  ? "notepad %userprofile%\\.ssh\\config"
                  : "nano ~/.ssh/config"
              }
              verificationCommand={
                activeOS === "Windows"
                  ? "type %userprofile%\\.ssh\\config"
                  : "cat ~/.ssh/config"
              }
            >
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mt-6">
                <p className="text-sm text-slate-700 mb-3 font-semibold">
                  Example config
                </p>
                <code className="text-sm font-mono text-slate-800 whitespace-pre">
                  Host github.com
                  HostName github.com
                  User git
                  IdentityFile ~/.ssh/id_ed25519
                </code>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-6">
                <p className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
                  Hint
                </p>
                <p className="text-sm text-slate-700">
                  Only add this file if you have multiple SSH keys.
                </p>
              </div>
            </InstructionSection>
          </div>
        </section>

        {/* SECTION: VERIFICATION */}
        <section id="final-verification" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide uppercase">
              04. Final Verification
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/40 rounded-full blur-[80px] pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Test Flight</h3>
            <p className="text-slate-600 mb-8 max-w-2xl">
              This is a full-cycle check: create a private repo, push a commit,
              and confirm your authentication and Git setup are working.
            </p>

            <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="ml-4 text-xs text-slate-500 font-mono">bash</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-emerald-400">gh auth status</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-emerald-400">gh repo create my-test-project --private --clone</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-blue-300">cd my-test-project</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-yellow-300">echo "# Hello World" &gt; README.md</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-purple-300">git add .</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-purple-300">git commit -m "Initial commit"</span>
                </div>
                <div className="group flex">
                  <span className="text-slate-600 w-6 select-none">$</span>
                  <span className="text-red-400">git push</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TROUBLESHOOTING */}
        <section id="troubleshooting" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wide uppercase">
              05. Troubleshooting
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Command not found</h3>
              <p className="text-sm text-slate-600 mb-3">
                If a command like <code className="bg-slate-100 px-1.5 py-0.5 rounded">node</code> or{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded">git</code> is not found:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Close your terminal and open it again.</li>
                <li>Restart your computer if the command still does not exist.</li>
                <li>Re-run the installer and accept the default PATH options.</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Docker not working</h3>
              <p className="text-sm text-slate-600 mb-3">
                If <code className="bg-slate-100 px-1.5 py-0.5 rounded">docker --version</code> fails:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Open Docker Desktop and wait until it shows Running.</li>
                <li>On Windows, make sure WSL2 is installed if Docker asks for it.</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">GitHub login issues</h3>
              <p className="text-sm text-slate-600 mb-3">
                If <code className="bg-slate-100 px-1.5 py-0.5 rounded">gh auth login</code> fails:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Run <code className="bg-slate-100 px-1.5 py-0.5 rounded">gh auth login</code> again and choose web browser login.</li>
                <li>Make sure your GitHub account has 2FA enabled.</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SSH permission denied</h3>
              <p className="text-sm text-slate-600 mb-3">
                If <code className="bg-slate-100 px-1.5 py-0.5 rounded">ssh -T git@github.com</code> fails:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Confirm your public key is added in GitHub settings.</li>
                <li>Make sure you copied the full key text.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 py-10 border-t border-slate-200">
          <p className="text-sm">Designed for VAM Nexus. © {new Date().getFullYear()}</p>
        </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
