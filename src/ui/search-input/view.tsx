import { useSearchInput } from "./_io";
import { BsSearch } from "react-icons/bs";

export function SearchInputView() {
  const { value, handleChange, handleSubmit } = useSearchInput();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-xl bg-zinc-900 bg-opacity-50 py-2 px-10"
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Pesquisar"
        className="bg-transparent outline-none w-full"
      />
      <button type="submit">
        <BsSearch size={20} />
      </button>
    </form>
  );
}
