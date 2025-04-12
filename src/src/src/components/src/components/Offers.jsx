import { useState } from "react";

function Offers() {
  const [offers, setOffers] = useState([]);
  const [offerText, setOfferText] = useState("");

  const handleAdd = () => {
    if (offerText.trim() === "") return;
    setOffers([...offers, offerText]);
    setOfferText("");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Offers</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={offerText}
          onChange={(e) => setOfferText(e.target.value)}
          placeholder="Enter offer"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6 text-gray-700">
        {offers.map((offer, index) => (
          <li key={index}>{offer}</li>
        ))}
      </ul>
    </div>
  );
}
export default Offers;
