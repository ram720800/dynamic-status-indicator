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
    <div className="fixed top-36 flex flex-col items-center justify-between sm:gap-6 w-full">
      <ToggleGroup
        type="single"
        value={view}
        onValueChange={(value) => value && handleToggle(value)}
        className="flex gap-1 sm:gap-4"
      >
        <ToggleGroupItem
          value="list"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2"
        >
          <List strokeWidth={3} className="w-10 h-10" />
          List view
        </ToggleGroupItem>
        <ToggleGroupItem
          value="card"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2"
        >
          <LayoutGrid strokeWidth={3} className="w-10 h-10" />
          Card view
        </ToggleGroupItem>
        <ToggleGroupItem
          value="pack"
          className="data-[state=on]:bg-pink2 data-[state=on]:text-white text-[16px] bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2"
        >
          <GalleryHorizontalEnd strokeWidth={3} className="w-10 h-10" />
          Pack view
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewModeToggle;
