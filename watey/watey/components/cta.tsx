import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-foreground/10 mb-6">
            <Droplets className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to stay hydrated?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto text-pretty">
            Join thousands of people who have built better hydration habits with
            Watey. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Started Free
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required. Free forever.
          </p>
        </div>
      </div>
    </section>
  );
}
