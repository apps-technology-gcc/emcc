import * as React from "react";

const options = [
  {
    id: "membersDirectory",
    label: "Members Directory (Accredited & Non-Accredited)",
  },
  {
    id: "trainingCourses",
    label: "Training & Course Providers (Accredited & Non-Accredited)",
  },
  {
    id: "charteredMembers",
    label: "Chartered Members",
  },
];

function FormSection() {
  return (
    <form className="flex flex-col self-start py-12 min-w-[240px] w-[652px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label
          htmlFor="searchOptions"
          className="text-base font-medium text-zinc-900 max-md:max-w-full"
        >
          What are you looking for?
        </label>
        <div className="flex flex-wrap gap-8 items-start mt-5 w-full max-md:max-w-full">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col min-w-[240px]">
              <div className="flex gap-2.5 items-center">
                <input
                  type="checkbox"
                  id={option.id}
                  className="flex flex-col self-stretch my-auto w-5 rounded-[30px] border border-solid border-zinc-900"
                />
                <label
                  htmlFor={option.id}
                  className="self-stretch my-auto text-xs font-light text-zinc-900"
                >
                  {option.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-start mt-8 w-full max-md:max-w-full">
        <input
          type="text"
          placeholder="What are you searching for?"
          aria-label="What are you searching for?"
          className="flex-1 shrink gap-2.5 px-2.5 py-2 text-xs font-light bg-white rounded-sm border border-solid basis-10 border-neutral-300 min-w-[240px] text-zinc-400 max-md:max-w-full"
        />
        <button
          type="submit"
          className="gap-2.5 self-stretch px-8 py-2.5 text-sm text-center text-indigo-600 whitespace-nowrap rounded-xl border border-indigo-600 border-solid max-md:px-5"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col items-start mt-8 w-full text-sm text-center text-indigo-600 max-md:max-w-full">
        <div className="gap-2.5 self-stretch">
          Browse Middle-East member directory
        </div>
        <div className="gap-2.5 self-stretch mt-5 max-md:max-w-full">
          Browse accredited members (Coaches, Mentors, Supervisors)
        </div>
        <div className="gap-2.5 self-stretch mt-5">
          Browse accredited training providers by region
        </div>
      </div>
    </form>
  );
}

export default FormSection;
