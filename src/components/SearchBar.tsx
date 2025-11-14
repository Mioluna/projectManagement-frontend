import { useState, useCallback } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search for... UNIQUE 123",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(
    (value: string) => {
      setSearchTerm(value);
      onSearch(value);
    },
    [onSearch],
  );

  const clearSearch = useCallback(() => {
    handleSearch("");
  }, [handleSearch]);

  return (
    <div className="w-full max-w-xl">
      <div className="relative flex items-center bg-neutral-300 shadow-sm focus-within:shadow-lg rounded-xl">
        <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-primary" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="bg-neutral-100 py-2 pr-10 pl-10 rounded-xl outline-none w-full font-medium text-neutral-700 text-base"
        />
        {searchTerm ? (
          <button
            onClick={clearSearch}
            className="right-3 absolute inset-y-0 flex justify-center items-center hover:bg-neutral-200 m-1 p-1.5 rounded-full"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-danger" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;