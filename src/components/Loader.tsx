export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] w-full bg-[#000]">
      <div className="relative w-16 h-16 ">
        <div className="absolute inset-0 border-4 border-t-transparent border-[#e50914] rounded-full animate-spin-slow"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-[#f5f5f5] rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};
