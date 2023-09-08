import Cards from "../components/Cards/Cards";

export default function Home({ characters, onClose }) {
  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
