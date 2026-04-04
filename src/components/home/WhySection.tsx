const applications = [
  { emoji: '🖼️', code: 'POS_DISPLAYS', label: 'Retail Signage' },
  { emoji: '🏙️', code: 'OUTDOOR_ADV', label: 'Billboards' },
  { emoji: '🚗', code: 'FLEET_WRAP', label: 'Vehicle Vinyl' },
  { emoji: '🏗️', code: 'IND_PARTS', label: 'Metal Marking' },
  { emoji: '💡', code: 'LIGHT_BOXES', label: 'Backlit Media' },
  { emoji: '🧶', code: 'SOFT_SIGN', label: 'Dye-Sub Textiles' },
]

const reasons = [
  {
    title: 'GCC-Wide Presence',
    text: 'Strategically located hubs across UAE, KSA, and Oman ensure rapid response times and local expertise.',
    icon: '01',
  },
  {
    title: 'Technical Support',
    text: 'Certified engineers trained by JHF and Dlican provide on-site assistance, calibration, and uptime protection.',
    icon: '02',
  },
  {
    title: 'Spare Parts Repo',
    text: 'Critical components, consumables, and replacement parts stay close to production with local stock support.',
    icon: '03',
  },
  {
    title: 'Financing Solutions',
    text: 'Flexible commercial pathways help production teams upgrade equipment without slowing operational growth.',
    icon: '04',
  },
  {
    title: 'Track Record',
    text: 'A long-standing installation history across the region gives buyers confidence in deployment and after-sales service.',
    icon: '05',
  },
  {
    title: 'Multi-Brand Ecosystem',
    text: 'Printers, cutters, materials, workflow support, and applications consulting live under one distribution structure.',
    icon: '06',
  },
]

export function WhySection() {
  return (
    <div>
      <section id="applications" className="border-y-2 border-[#111111] bg-[#f1f5f9] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
              {'// '}Production Use-Cases
            </span>
            <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase tracking-[-0.04em] text-[#111111] md:text-6xl">
              Versatility By Design
            </h2>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-[#d1d5db] md:grid-cols-4 lg:grid-cols-6">
            {applications.map((application) => (
              <div
                key={application.code}
                className="group aspect-square cursor-crosshair border-b border-r border-[#d1d5db] p-6 transition-colors duration-200 ease-in-out hover:bg-[#ffffff]"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-3xl">{application.emoji}</span>
                  <div>
                    <div className="mb-1 font-[var(--font-barlow-condensed)] text-[10px] font-black uppercase tracking-[0.18em] text-[#111111]">
                      {application.code}
                    </div>
                    <div className="font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.08em] text-[#111111]">
                      {application.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div>
          <div className="mb-16">
            <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
              {'// '}Service Infrastructure
            </span>
            <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase tracking-[-0.04em] text-[#111111] md:text-6xl">
              The Blue Rhine Advantage
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="group flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center bg-[#111111] font-[var(--font-barlow-condensed)] text-2xl font-black text-[#ffffff] transition-colors duration-200 ease-in-out group-hover:bg-[#f26522]">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[0.04em] text-[#111111]">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#6b7280]">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
