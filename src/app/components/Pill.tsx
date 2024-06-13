
interface PillProps {
  nameTag: string;
}

export function Pill({nameTag}: PillProps) {
	return (
    <li role="presentation">
      <button
        type="button"
        className="my-2 block rounded bg-lime-200 border border-lime-200 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[twe-nav-active]:!bg-primary-100 data-[twe-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white/50 dark:data-[twe-nav-active]:!bg-slate-900 dark:data-[twe-nav-active]:text-primary-500 md:me-4"
        id="pills-home-tab04"
        data-twe-toggle="pill"
        data-twe-target="#pills-home04"
        data-twe-nav-active
        role="tab"
        aria-controls="pills-home04"
        aria-selected="true"
      >
        #{nameTag}
      </button>
    </li>
  );
}
