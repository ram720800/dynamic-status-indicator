const PackView = () => (
  <div className="bg-wl2 p-6 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition flex flex-col items-center text-center">
    <div className="relative w-24 h-24 mb-4">
      <img
        src="/fingers.jpeg"
        alt="Pack Icon"
        className="absolute inset-0 w-full h-full rounded-lg z-2 rotate-12 hover:-rotate-6 ring-1 ring-gray-950/5"
      />
      <img
        src="/vibe.jpeg"
        alt="Pack Icon"
        className="absolute inset-0 w-full h-full rounded-lg -rotate-6 ring-1 ring-gray-950/5"
      />
    </div>
    <p className="font-semibold text-lg">2 Collectibles</p>
    <p className="text-sm text-gray-500">1.064 ETH</p>
  </div>
);
export default PackView;
