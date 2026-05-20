interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  action?: React.ReactNode
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  action,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div
      className={`flex flex-col gap-6 ${align === 'center' ? 'items-center' : 'md:flex-row md:items-end md:justify-between'}`}
    >
      <div className={`max-w-3xl space-y-4 ${alignClass}`}>
        <p className="section-label">{label}</p>
        <h2 className={`heading-section ${alignClass}`}>{title}</h2>
        {description && <p className={`body-muted max-w-2xl ${alignClass}`}>{description}</p>}
      </div>
      {action}
    </div>
  )
}
