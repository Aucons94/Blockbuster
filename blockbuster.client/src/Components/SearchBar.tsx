export function SearchBar() {
  return (
    <div className="flex justify-center align-center mt-[5rem]">
      <input
        type="text"
        className="w-[70rem] rounded-full border-2 focus:shadow-none focus:ring-transparent border-block-blue focus:border-block-yellow/100 me-8"
        placeholder="Cerca Cojone"
      />
      <button className="bg-block-yellow text-block-blue hover:bg-block-blue hover:text-block-yellow rounded-full min-w-[6rem] font-['blockfont'] text-xl pt-[1px]">
        Search
      </button>
    </div>
  );
}
