const NavbarDesktop = (props) => {
  const { currentUnits, setCurrentUnits } = props;

  return (
    <ul className="w-full flex justify-around items-center">
      <li>
        <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#00AEE0]">
          Unitee.
        </h2>
      </li>
      <li
        className={`text-xl border-b-4 border-b-[#22c55e] p-2 max-lg:text-lg ${
          Number(currentUnits) == 0
            ? "bg-[#22c55e] text-[#F0EFF4]"
            : "bg-transparent"
        }`}
      >
        <button
          id="0"
          onClick={(e) => {
            setCurrentUnitCategory(null);
            setShowDropdown(false);
            setCurrentUnits(e.target.id);
          }}
        >
          Engineering.
        </button>
      </li>
      <li
        className={`text-xl border-b-4 border-b-[#00AEE0] p-2 max-lg:text-lg ${
          Number(currentUnits) == 1
            ? "bg-[#00AEE0] text-[#F0EFF4]"
            : "bg-transparent"
        }`}
      >
        <button
          id="1"
          onClick={(e) => {
            setCurrentUnitCategory(null);
            setShowDropdown(false);
            setCurrentUnits(e.target.id);
          }}
        >
          Physics.
        </button>
      </li>
      <li
        className={`text-xl border-b-4 border-b-[#F04E23] p-2 max-lg:text-lg ${
          Number(currentUnits) == 2
            ? "bg-[#F04E23] text-[#F0EFF4]"
            : "bg-transparent"
        }`}
      >
        <button
          id="2"
          onClick={(e) => {
            setCurrentUnitCategory(null);
            setShowDropdown(false);
            setCurrentUnits(e.target.id);
          }}
        >
          Construction.
        </button>
      </li>
      <li
        className={`text-xl border-b-4 border-b-[#FFB400] p-2 max-lg:text-lg ${
          Number(currentUnits) == 3
            ? "bg-[#FFB400] text-[#F0EFF4]"
            : "bg-transparent"
        }`}
      >
        <button
          id="3"
          onClick={(e) => {
            setCurrentUnitCategory(null);
            setShowDropdown(false);
            setCurrentUnits(e.target.id);
          }}
        >
          Daily use.
        </button>
      </li>
    </ul>
  );
};

export default NavbarDesktop;
