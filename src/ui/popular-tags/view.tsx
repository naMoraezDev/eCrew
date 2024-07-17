import { FaStar } from "react-icons/fa";
import { WordpressService } from "@/services/wordpress/wordpress.service";
import { FetchHttpClientAdapter } from "@/infrastructure/adapters/implementation/fetch-http-client.adapter";

export async function PopularTagsView() {
  const tagsList = await new WordpressService(
    new FetchHttpClientAdapter()
  ).getTags();

  return (
    <section className="flex flex-col gap-4 p-2 rounded-lg text-sm font-kanit">
      <h4 className="font-kanit font-medium text-md flex items-center gap-2">
        <FaStar />
        Tags populares
      </h4>
      <div className="flex flex-wrap gap-2">
        {tagsList.data.tags.edges.map((tag) => (
          <span
            key={tag.node.id}
            className="px-2 py-1 rounded-lg bg-zinc-500 bg-opacity-10"
          >
            {tag.node.name}
          </span>
        ))}
      </div>
    </section>
  );
}
