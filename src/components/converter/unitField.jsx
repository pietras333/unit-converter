import { useEffect, useState } from "react";
import conversionRates from "../../app/assets/conversionRates.json"; // Import conversion rates data
import UnitConverter from "./unit-converter"; // Import UnitConverter class

const UnitField = (props) => {
  const { unitName, unitSymbol, unitCategory } = props; // Destructure props
  const [unitValue, setUnitValue] = useState(""); // State for unit value input
  const conversionRatesJSON = conversionRates; // Store conversion rates data

  // Function to handle input value change
  const handleValueInput = (e) => {
    // Store current unit in local storage
    window.localStorage.setItem("currentUnit", unitName ? unitName : "");
    setUnitValue(e.target.value); // Update unit value state
  };

  useEffect(() => {
    // Get other input fields
    const otherInputs = document.querySelectorAll('input[type="number"]');
    otherInputs.forEach((input) => {
      // Change background color based on the selected unit
      if (input.id === window.localStorage.getItem("currentUnit")) {
        input.classList.add("bg-[#F04E23]");
      } else {
        input.classList.replace("bg-[#F04E23]", "bg-[#00AEE0]");
      }
      // Convert and update input values based on the selected unit and value
      const convertedValue = new UnitConverter(
        unitValue,
        unitCategory,
        conversionRatesJSON
      )
        .from(window.localStorage.getItem("currentUnit"))
        .to(input.id);
      input.value = convertedValue;
    });
  }, [unitValue]); // Run effect when unitValue changes

  return (
    <section className="p-4 space-y-2 w-1/3 max-lg:w-1/2 max-md:w-full">
      {/* Display unit name and symbol */}
      <h3 className="text-xl font-bold text-[#24285b]">
        {unitName} [{unitSymbol}].
      </h3>
      {/* Input field for unit value */}
      <input
        id={unitName}
        type="number"
        onChange={(e) => handleValueInput(e)}
        value={unitValue}
        className="p-2 focus:outline-none focus:rounded-md bg-[#00AEE0] focus:bg-[#F04E23] active:bg-[#F04E23] text-[#F0EFF4]"
      />
    </section>
  );
};

export default UnitField;
