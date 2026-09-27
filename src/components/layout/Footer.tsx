export function Footer() {
  return (
    <footer className="py-12 bg-black text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4 flex justify-center">
            <img src="/src/assets/logo.png" alt="Nexa WebStudio Logo" className="w-12 h-12 object-contain" />
        </div>
        <div className="mb-2 text-white font-bold text-lg">NEXA WEBSTUDIO</div>
        <div className="mb-8">Crafting Digital Experiences That Stand Apart.</div>
        <div className="flex justify-center gap-6 mb-8">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map(link => <a href={`#${link.toLowerCase()}`} className="hover:text-white" key={link}>{link}</a>)}
        </div>
        <div>© 2026 Nexa WebStudio. All rights reserved.</div>
      </div>
    </footer>
  );
}
