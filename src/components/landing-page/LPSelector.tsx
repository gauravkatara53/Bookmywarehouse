import ApartmentSVG from "@/assets/svgs/ApartmentSVG";
import HouseSVG from "@/assets/svgs/HouseSVG";
import VillaSVG from "@/assets/svgs/VillaSVG";
import { motion } from "framer-motion";
import {
  RecommendationContext,
  RecommendationType,
} from "@/providers/RecommendationProvider";
import { cn } from "@/utilities";
import React, { useContext, useMemo } from "react";

const TABS: Array<{
  name: RecommendationType;
  icon: React.FC<{ color?: string }>;
}> = [
  { name: "house", icon: HouseSVG },
  { name: "villa", icon: VillaSVG },
  { name: "warehouse", icon: ApartmentSVG },
];

export default function LPSelector(): React.JSX.Element {
  const RC = useContext(RecommendationContext);

  const tabs = useMemo(
    () =>
      TABS.map((tab, i) => {
        const isSelected = RC?.selected === tab.name; // Use optional chaining here
        const IconComponent = tab.icon;

        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            key={`OR_TAB_${i}`}
            onClick={() => RC?.changeTab && RC.changeTab(tab.name)} // Ensure the method exists before calling
            className={cn(
              "border md:py-3 py-1 capitalize cursor-pointer border-WH-light-gray md:text-base sm:text-sm text-xs hover:border-WH-light-green-01/40 px-2 md:px-6 rounded-full text-WH-light-purple flex gap-2 items-center font-medium",
              {
                "bg-WH-light-green text-WH-light-green-01 border-WH-light-green":
                  isSelected,
              }
            )}
          >
            <IconComponent color={isSelected ? "#10B981" : "#888B97"} />
            {tab.name}
          </motion.div>
        );
      }),
    [RC?.selected, RC?.changeTab] // Update dependencies to use optional chaining
  );

  return <div className="flex lg:gap-8 gap-2">{tabs}</div>;
}
