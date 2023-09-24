const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full md:w-1/3 h-full bg-gray-100 border shadow-xl rounded-r-2xl z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out p-8`}
    >
      <div className="text-2xl font-bold">
        Cart Items
      </div>
    </div>
  );
};

export default Sidebar;
