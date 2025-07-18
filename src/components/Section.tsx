export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
  isBackButton?: boolean;
}) => (
  <div className="md:space-y-2">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold px-2 text-white">
      {title}
    </h2>
    <div className="flex gap-3 overflow-x-auto no-scrollbar px-2 pb-2 p-4">
      {children}
    </div>
  </div>
);
