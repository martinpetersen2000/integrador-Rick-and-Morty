import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

export default function Nav({ onSearch }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
