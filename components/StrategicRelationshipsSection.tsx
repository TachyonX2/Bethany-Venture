import Image from 'next/image'

const vcPartners = [
  { name: 'Msquared', logo: '/partner logos/msquared.jpg' },
  { name: 'Amigo Ventures', logo: '/partner logos/amigo.jpg' },
  { name: 'AcquireFi', logo: '/partner logos/aquireFi.jpg' },
  { name: 'Anti Capital', logo: '/partner logos/anti capital.jpg' },
  { name: 'Enflux Capital', logo: '/partner logos/enflux.jpg' },
  { name: 'Cequire Capital', logo: '/partner logos/cequire.jpg' },
  { name: 'Cybertim', logo: '/partner logos/cybertim.jpg' },
  { name: 'HVS Ventures', logo: '/partner logos/HVS.jpg' },
  { name: 'MAGNUS', logo: '/partner logos/magnus.jpg' },
  { name: 'Web3 Ventures', logo: '/partner logos/web3 ventures.jpg' },
  { name: 'Nimbus Capital', logo: '/partner logos/nimbus.jpg' },
]

const exchanges = [
  { name: 'Binance', logo: '/exchange-logos/exchange-1.png' },
  { name: 'Bybit', logo: '/exchange-logos/exchange-2.jpg' },
  { name: 'OKX', logo: '/exchange-logos/exchange-3.jpg' },
  { name: 'Gate', logo: '/exchange-logos/exchange-4.jpg' },
  { name: 'MEXC', logo: '/exchange-logos/exchange-5.jpg' },
  { name: 'KuCoin', logo: '/exchange-logos/exchange-6.jpg' },
]

const allPartners = [
  ...vcPartners.map((p) => ({ ...p, type: 'VC' as const })),
  ...exchanges.map((p) => ({ ...p, type: 'Exchange' as const })),
]

export default function StrategicRelationshipsSection() {
  return (
    <section className="bg-accent-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 font-heading text-primary-dark-green">
            Strategic Relationships
          </h2>
          <p className="text-lg text-primary-dark-green/80">
            Working relationships with leading Web3 investors and exchanges.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
            {allPartners.map((partner) => (
              <div
                key={`${partner.type}-${partner.name}`}
                className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-background-light-gray px-4 py-4 text-center transition hover:bg-accent-white"
              >
                <div className="relative mb-3 h-12 w-28">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain opacity-90 transition-opacity duration-200 hover:opacity-100"
                    sizes="112px"
                  />
                </div>
                <p className="text-xs font-medium text-primary-dark-green/80">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

