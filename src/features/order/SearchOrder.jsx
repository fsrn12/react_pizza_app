// import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchOrder = function () {
  const navigate = useNavigate();
  // const [query, setQuery] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput;
    navigate(`/order/${searchInput.value}`);
    searchInput.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        placeholder="Search order number"
        className="w-28 rounded-md bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        // onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
