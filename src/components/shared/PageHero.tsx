import Container from "@/components/shared/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}