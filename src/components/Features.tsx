import { features } from "@/data/features";
import { EntertainmentIcon } from "@/components/EntertainmentIcon";

export function Features() {
  return (
    <section id="features" className="section-glow py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Powerful features for your complete entertainment experience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {features.map(({ icon: Icon, title, description, tone }, index) => (
            <article
              key={title}
              className="group feature-tile rounded-lg border bg-card p-5 transition duration-300 sm:p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <EntertainmentIcon icon={Icon} tone={tone} />
                <span aria-hidden="true" className="text-xs font-semibold tabular-nums text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="title-glow mt-4 font-display text-base font-bold sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}

          {/* Fills the last cell of the 2-col mobile grid */}
          <div className="hidden sm:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
