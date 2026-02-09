export default function Footer({ settings }) {
  return (
    <footer className="py-8" style={{ backgroundColor: '#110e0b', borderTop: '1px solid #1f1812' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-widest" style={{ color: '#3d2e20' }}>{settings.footer_text}</p>
        <p className="text-xs tracking-wide" style={{ color: '#2a1f14' }}>Feito com React + Tailwind + Claude</p>
      </div>
    </footer>
  )
}
