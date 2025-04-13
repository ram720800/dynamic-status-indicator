import { useState } from "react";
import ViewModeToggle from "./components/ViewModeToggle";
import AnimatedViewContainer from "./components/AnimatedViewContainer";
import ListView from "./components/ListView";
import CardView from "./components/CardView";
import PackView from "./components/PackView";
import StatusBadge from "./components/StatusBadge";

const App = () => {
  const [viewMode, setViewMode] = useState("list");

  const renderContent = () => {
    switch (viewMode) {
      case "list":
        return <ListView />;
      case "card":
        return <CardView />;
      case "pack":
        return <PackView />;
      default:
        return null;
    }
  };

  return (
    <main
      className="h-screen w-full flex flex-col items-center justify-between p-6"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 228, 236) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="uppercase text-2xl sm:text-4xl font-extrabold text-pink2 cursor-pointer">
        Dynamic Status Indicator
      </div>
      <h1 className="fixed top-24 text-xl sm:text-3xl font-bold">Collectibles</h1>
      <ViewModeToggle onChange={setViewMode} />
      <AnimatedViewContainer viewMode={viewMode}>
        {renderContent()}
      </AnimatedViewContainer>
      <StatusBadge />
      <p className="text-gray-600 fixed bottom-0">
        Current view: <strong className="text-pink2">{viewMode}</strong>
      </p>
    </main>
  );
};

export default App;
