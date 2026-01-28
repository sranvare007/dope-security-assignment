import { useState, useEffect } from "react";
import { Table } from "./components/Table/Table";
import type { Character, CharacterWithViewed } from "./types";

function App() {
  const [data, setData] = useState<CharacterWithViewed[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const characters: Character[] = await response.json();
        const charactersWithViewed: CharacterWithViewed[] = characters.map(
          (char) => ({
            ...char,
            viewed: false,
          }),
        );
        setData(charactersWithViewed);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <header className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white py-10 px-5 text-center shadow-md">
        <h1 className="m-0 mb-2 text-[1.8rem] font-bold md:text-4xl">
          Character Management Table
        </h1>
        <p className="m-0 text-[0.95rem] opacity-95 md:text-lg">
          Manage and filter 1000+ characters efficiently
        </p>
      </header>
      <main className="p-5 max-w-[1400px] mx-auto">
        <Table data={data} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
