import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import { List } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { GalleryHorizontalEnd } from "lucide-react";

const ViewModeToggle = ({ onChange }) => {
  const [view, setView] = useState("list");
  const handleToggle = (value) => {
    setView(value);
    onChange(value);
  };
  return (
    <div className="flex flex-col items-center w-full gap-4 sm:gap-6 ">
      <h1 className="-ml-60 text-xl sm:text-3xl font-bold">
        Collectibles
      </h1>
      <ToggleGroup
        type="single"
        value={view}
        onValueChange={(value) => value && handleToggle(value)}
        className="flex gap-1 sm:gap-4"
      >
        <ToggleGroupItem
          value="list"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-wl2 px-2 sm:px-4 py-2 rounded-full flex items-center gap-2"
        >
          <List strokeWidth={3} className="w-10 h-10" />
          List view
        </ToggleGroupItem>
        <ToggleGroupItem
          value="card"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-wl2 px-2 sm:px-4 py-2 rounded-full flex items-center gap-2"
        >
          <LayoutGrid strokeWidth={3} className="w-10 h-10" />
          Card view
        </ToggleGroupItem>
        <ToggleGroupItem
          value="pack"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-wl2 px-2 sm:px-4 py-2 rounded-full flex items-center gap-2"
        >
          <GalleryHorizontalEnd strokeWidth={3} className="w-10 h-10" />
          Pack view
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewModeToggle;
