import { FaStar } from "react-icons/fa";
import { PopularTagsProps } from "./types";

export function PopularTagsView({ tags }: PopularTagsProps) {
  return (
    <section className="flex flex-col gap-4 p-2 rounded-lg text-sm font-kanit">
      <h4 className="font-kanit font-medium text-md flex items-center gap-2">
        <FaStar />
        Tags populares
      </h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.ID} className="bg-zinc-800 px-2 py-1 rounded-lg">
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
}
