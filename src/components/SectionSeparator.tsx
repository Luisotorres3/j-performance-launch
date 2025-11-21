const SectionSeparator = () => {
  return (
    <div className="relative h-24 bg-gradient-to-b from-background via-primary/5 to-background flex items-center justify-center overflow-hidden">
      {/* Animated background wave */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-primary/20 animate-pulse"
          />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionSeparator;
