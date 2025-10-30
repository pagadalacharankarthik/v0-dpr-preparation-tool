export function StatsSection() {
  const stats = [
    { label: "MSMEs Supported", value: "5000+" },
    { label: "Compliance Cases Resolved", value: "50K+" },
    { label: "Business Growth Average", value: "35%" },
    { label: "Customer Satisfaction", value: "98%" },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
