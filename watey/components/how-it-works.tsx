export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description:
        'Sign up in seconds. No credit card required, just your email and you&apos;re ready to go.',
    },
    {
      number: '02',
      title: 'Set Your Daily Goal',
      description:
        'Tell us how much water you want to drink each day. We&apos;ll show you the recommended amount too.',
    },
    {
      number: '03',
      title: 'Tap to Track',
      description:
        'Every time you finish a bottle of water, tap the bottle to fill it up. It&apos;s that simple.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            How Watey Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get started in three simple steps and build your hydration habit
            today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
