import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../styles/search.css";
export const SearchBar = () => {
  const allProducts = useSelector((state) => state?.products?.products);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleOnchange = (e) => {
    const text = e.target.value;
    setInput(text);
    search(input);
  };

  const handleSearch = (e) => {
    if (e?.key == "Enter") {
      search(input);
    }
  };

  const search = () => {
    const filteredData = allProducts.filter((prod) => {
      return prod.title?.toLowerCase().includes(input?.toLowerCase());
    });
    setResults(filteredData);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={handleOnchange}
        onKeyDown={handleSearch}
      />
      <FaSearch className="search-icon" />
      {results?.length > 0 && input && (
        <ul className="search-ul">
          {results?.map((item, index) => (
            <li
              key={index}
              className="search-li"
              onClick={() => {
                setInput(item);
                setResults([]);
              }}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
