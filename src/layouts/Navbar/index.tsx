import StatusBar from "./statusBar";
import SearchBar from "./searchBar";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white min-w-full">
      <StatusBar />
      <SearchBar />
    </div>
  );
};

export default Navbar;
