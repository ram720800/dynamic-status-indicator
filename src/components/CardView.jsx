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

const CardView = () => (
  <div className="grid grid-cols-2 gap-4">
    {collectibles.map((item) => (
      <div
        key={item.id}
        className="bg-wl2 p-4 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition text-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-32 rounded-lg ring-1 ring-gray-950/5 object-cover mb-4"
        />
        <p className="font-semibold">{item.title}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{item.price} ETH </p>
          <p className="text-sm text-yellow-500 font-medium">
            #{item.id}{" "}
          </p>
        </div>
      </div>
    ))}
  </div>
);
export default CardView;
