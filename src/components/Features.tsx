import { Clapperboard, Music2, SquarePlay, UsersRound, Bookmark } from "lucide-react";

const features = [
  {
    icon: Clapperboard,
    title: "Movies & Shows",
    description: "Watch the latest movies, web series and more.",
  },
  {
    icon: Music2,
    title: "Music",
    description: "Discover and enjoy trending music and charts.",
  },
  {
    icon: SquarePlay,
    title: "Shorts",
    description: "Short videos, big entertainment.",
  },
  {
    icon: UsersRound,
    title: "Subscriptions",
    description: "Follow your favourite channels and creators.",
  },
  {
    icon: Bookmark,
    title: "Personal Library",
    description: "Manage your history, downloads and playlists.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-muted/40 py-16 sm:py-20 lg:py-24">
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
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-secondary transition group-hover:scale-105">
                <Icon className="size-5.5 text-primary" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold sm:text-lg">{title}</h3>
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
