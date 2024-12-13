import React, { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
  const [fruitInput, setFruitInput] = useState("");

  const addFruit = () => {
    if (fruitInput.trim() !== "") {
      setFruits([...fruits, fruitInput]); // Add fruit
      setFruitInput(""); // Clear input
    }
  };

  const removeFruit = (index) => {
    const updatedFruits = fruits.filter((_, idx) => idx !== index); // Remove by index
    setFruits(updatedFruits);
  };

  return (
    <div className="container mx-auto min-h-screen p-6 bg-gradient-to-b from-blue-50 to-blue-200 shadow-lg">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600 drop-shadow-md">
          Fruit Container 🍎🍌🍒
        </h1>
        <p className="text-blue-500 mt-3 text-lg">
          Add your favorite fruits and organize your list with style!
        </p>
      </header>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
        <input
          type="text"
          placeholder="Enter a fruit"
          className="w-full md:w-1/2 px-4 py-3 border-2 border-blue-300 rounded-lg text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400"
          value={fruitInput}
          onChange={(e) => setFruitInput(e.target.value)}
        />
        <button
          onClick={addFruit}
          disabled={!fruitInput.trim()}
          className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 ${
            !fruitInput.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Add Fruit
        </button>
      </div>

      {/* Fruit List Section */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 border-b-4 border-blue-500 pb-2 mb-6">
          Fruits List
        </h2>

        {fruits.length > 0 ? (
          <ul className="space-y-4">
            {fruits.map((fruit, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-400"
              >
                <span className="text-blue-800 font-medium">{fruit}</span>
                <button
                  onClick={() => removeFruit(idx)}
                  className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-blue-500 text-lg">
            No fruits added yet. Start by adding some!
          </p>
        )}
      </section>
    </div>
  );
}
