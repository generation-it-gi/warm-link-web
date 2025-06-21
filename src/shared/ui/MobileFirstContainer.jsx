export const MobileFirstContainer = ({ children, hasNav = false }) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`w-full max-w-[600px] min-h-screen ${hasNav ? 'flex flex-col' : ''}`}>
        {children}
      </div>
    </div>
  );
};
