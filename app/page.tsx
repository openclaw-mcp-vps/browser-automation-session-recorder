export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension + Dashboard
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Record Browser Actions as{' '}
          <span className="text-[#58a6ff]">Replayable Scripts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Click record, interact with any website, and get production-ready Puppeteer or Playwright code instantly. No manual scripting required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start Recording — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#d29922]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">generated-script.ts</span>
          </div>
          <pre className="text-sm text-[#c9d1d9] overflow-x-auto">
            <code>{
`import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://app.example.com/login');
await page.fill('#email', 'user@example.com');
await page.fill('#password', '••••••••');
await page.click('button[type="submit"]');
await page.waitForURL('**/dashboard');
await browser.close();`
            }</code>
          </pre>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Install Extension', desc: 'Add SessionScript to Chrome in one click from the Web Store.' },
            { step: '02', title: 'Record Actions', desc: 'Click record and interact normally — clicks, inputs, and navigation are all captured.' },
            { step: '03', title: 'Export Script', desc: 'Download Puppeteer or Playwright code ready to run in CI/CD pipelines.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold mb-2">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-bold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited recordings',
              'Puppeteer & Playwright export',
              'Dashboard to manage scripts',
              'Team sharing (up to 5 seats)',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. 7-day free trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which automation frameworks are supported?',
              a: 'SessionScript generates code for both Puppeteer and Playwright. You can switch between them in the dashboard before exporting.'
            },
            {
              q: 'Does it work on all websites?',
              a: 'It works on any standard website. Some SPAs with shadow DOM or iframes may require minor manual adjustments to the generated selectors.'
            },
            {
              q: 'Is my recorded data stored securely?',
              a: 'Recordings are encrypted at rest and in transit. You can delete any recording from the dashboard at any time. We never share your data.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} SessionScript. Built for QA engineers and developers.</p>
      </footer>
    </main>
  )
}
