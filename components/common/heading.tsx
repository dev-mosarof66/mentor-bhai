export const StyledHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="w-fit relative">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="absolute -bottom-1 right-0 w-[60%] h-0.5 bg-purple-500" />
    </div>
  );
};
