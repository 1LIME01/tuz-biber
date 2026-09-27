import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6EFE8] px-4">
      <div className="max-w-lg rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8 text-center shadow-[0_20px_40px_rgba(36,27,20,0.08)]">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14]">This page wandered off.</h1>
        <p className="mt-4 text-lg leading-8 text-[#57402E]">The route you requested isn’t available, but the next jar is still waiting.</p>
        <Link href="/en" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B86F3C] px-6 py-3 text-sm font-medium text-[#F6EFE8] transition hover:bg-[#C67C46]">Back to home</Link>
      </div>
    </main>
  );
}
