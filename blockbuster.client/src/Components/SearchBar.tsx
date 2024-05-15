export function SearchBar() {
  return (
    <div className="flex justify-center align-center mt-10">
      <input type="text" className="w-[70rem] me-8" placeholder="Cerca Cojone" />
      <button className="bg-block-yellow text-block-blue hover:bg-block-blue hover:text-block-yellow rounded-full w-[5rem] font-['blockfont']">
        Search
      </button>
    </div>
  );
}
