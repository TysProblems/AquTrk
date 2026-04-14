import { Droplets, Calendar, BarChart3, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: 'Set Your Daily Goal',
    description:
      'Customize your hydration target based on your lifestyle. We provide recommendations based on health guidelines.',
  },
  {
    icon: Droplets,
    title: 'Visual Water Bottle',
    description:
      'Watch your bottle fill up with every drink. A satisfying visual way to track your progress throughout the day.',
  },
  {
    icon: Calendar,
    title: 'Track Your History',
    description:
      'View your hydration patterns over time with our calendar view. Build streaks and stay consistent.',
  },
  {
    icon: BarChart3,
    title: 'Progress Insights',
    description:
      'Get insights into your drinking habits. See your total bottles consumed and track your improvement.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to stay hydrated
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple, beautiful, and effective. Watey makes tracking your water
            intake a breeze with these powerful features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/50 bg-card/80 backdrop-blur hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
