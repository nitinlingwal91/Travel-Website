import Container from "@/components/shared/Container";

type TripsFiltersProps = {
  destination: string;
  category: string;
  difficulty: string;
  budget: string;
  onDestinationChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
  onReset: () => void;
};

export default function TripsFilters({
  destination,
  category,
  difficulty,
  budget,
  onDestinationChange,
  onCategoryChange,
  onDifficultyChange,
  onBudgetChange,
  onReset,
}: TripsFiltersProps) {
  return (
    <section className="pb-6">
      <Container>
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 xl:grid-cols-5">
          <div>
            <label
              htmlFor="destination"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Destination
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              <option value="">All destinations</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Trip type
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              <option value="">All trip types</option>
              <option value="Backpacking">Backpacking</option>
              <option value="Trekking">Trekking</option>
              <option value="Weekend Escape">Weekend Escape</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              <option value="">Any difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Easy to Moderate">Easy to Moderate</option>
              <option value="Moderate">Moderate</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Budget
            </label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => onBudgetChange(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              <option value="">Any budget</option>
              <option value="under-7000">Under ₹7,000</option>
              <option value="7000-9000">₹7,000 - ₹9,000</option>
              <option value="9000-plus">₹9,000+</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              onClick={onReset}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}