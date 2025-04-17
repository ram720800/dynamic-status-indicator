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
    <div
      className="min-h-screen overflow-y-auto w-full flex flex-col items-center justify-start gap-8 px-4 pt-10 pb-16"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 228, 236) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="uppercase text-2xl sm:text-4xl font-extrabold text-pink2 cursor-pointer">
        Dynamic Status Indicator
      </div>
      
      <ViewModeToggle onChange={setViewMode} />
      <AnimatedViewContainer viewMode={viewMode}>
        {renderContent()}
      </AnimatedViewContainer>
      <StatusBadge />
      <p className="text-gray-600">
        Current view: <strong className="text-pink2">{viewMode}</strong>
      </p>
    </div>
  );
};

export default App;
