const NavbarDesktop = (props) => {
  // Destructure props
  const { currentUnits, setCurrentUnits } = props;

  return (
    <ul className="w-full flex justify-around items-center">
      {/* Logo */}
      <li>
        <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#00AEE0]">
          Unitee.
        </h2>
      </li>
      {/* Navigation items */}
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className={`text-xl border-b-4 border-b-[#22c55e] p-2 max-lg:text-lg ${
            Number(currentUnits) === index
              ? `bg-[#${
                  ["22c55e", "00AEE0", "F04E23", "FFB400"][index]
                }] text-[#F0EFF4]`
              : "bg-transparent"
          }`}
        >
          <button
            onClick={() => setCurrentUnits(index.toString())}
            id={index.toString()}
          >
            {/* Navigation text */}
            {["Engineering", "Physics", "Construction", "Daily use"][index]}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarDesktop;
