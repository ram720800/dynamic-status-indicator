const collectibles = [
  {
    id: 72,
    title: "Skilled finger series",
    price: 0.855,
    image: "/fingers.jpeg",
  },
  {
    id: 80,
    title: "Vibrant vibe series",
    price: 0.209,
    image: "/vibe.jpeg",
  },
];

const ListView = () => (
  <div className="space-y-4">
    {collectibles.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition"
      >
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 rounded-lg ring-1 ring-gray-950/5 object-cover"
          />
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">{item.price} ETH</p>
          </div>
        </div>
        <span className="text-sm text-yellow-500 font-medium mt-6">#{item.id}</span>
      </div>
    ))}
  </div>
);

export default ListView;
