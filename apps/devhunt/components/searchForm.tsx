"use client";

import { useSearchTextContext } from "lib/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm() {
  const { searchText, handleSearchTextChange } = useSearchTextContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    handleSearchTextChange(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      action="#"
      className="relative mx-auto mt-5 w-[610px] animate-[intro_0.3s_0.1s_backwards]"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className="cursor-pointer absolute top-[17px] left-[25px]"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="transition-all duration-200 text-[rgba(0,0,0,0.73)] hover:text-[rgba(0,0,0,0.93)] focus:text-[rgba(0,0,0,0.93)]"
          />
      </button>
      <input
        value={searchText}
        onChange={handleChange}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        className="h-14 
        w-full rounded-[4px] 
        pl-[55px] pr-[15px] pb-[2px]
        text-[rgba(0,0,0,0.9)] 
        caret-[rgba(0,0,0,0.5)]
        bg-[rgba(255,255,255,0.9)] 
        hover:bg-[rgba(255,255,255,1)]
        focus:bg-[rgba(255,255,255,1)]
        focus:shadow-[0_0_0_4px_rgba(255,255,255,0.4)] 

          transition-all duration-200 
          outline-none
       


          placeholder:text-[rgba(0,0,0,0.7)] 
          placeholder:font-medium placeholder:text-[15px]
            "
        style={{
          transition: "box-shadow 0.1s"
        }}
      />
    </form>
  );
}

