// import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";

export default function MagicCardDemo() {
  // const { theme } = useTheme();
  // const isDark = theme === "dark";

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 p-4"
      style={{
        background: "transparent",
      }}
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={"#262626"}
      >
        <div className="flex h-full w-full flex-col items-center justify-center p-8">
          <span>Hover me</span>
        </div>
      </MagicCard>
    </div>
  );
}
