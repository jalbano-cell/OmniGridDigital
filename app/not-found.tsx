export default function NotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-4 px-8 text-center">
      <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400">404</p>
      <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-0.03em] text-gold-200">Page Not Found</h1>
      <p className="text-[15px] text-ink-1 max-w-[360px] leading-[1.7]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <a href="/" className="mt-4 text-sm font-semibold text-gold-300 hover:text-gold-200 transition-colors">
        Back to home
      </a>
    </main>
  )
}
