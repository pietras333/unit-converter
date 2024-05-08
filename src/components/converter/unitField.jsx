import { useEffect, useState } from "react";
import conversionRates from "../../app/assets/conversionRates.json";
import UnitConverter from "./unit-converter";

const UnitField = (props) => {
  const { unitName, unitSymbol, unitCategory } = props;
  const [unitValue, setUnitValue] = useState("");
  const conversionRatesJSON = conversionRates;

  const handleValueInput = (e) => {
    window.localStorage.setItem("currentUnit", unitName ? unitName : "");
    setUnitValue(e.target.value);
  };

  useEffect(() => {
    const otherInputs = document.querySelectorAll('input[type="number"]');
    otherInputs.forEach((input) => {
      if (input.id === window.localStorage.getItem("currentUnit")) {
        input.classList.add("bg-[#F04E23]");
      } else {
        input.classList.replace("bg-[#F04E23]", "bg-[#00AEE0]");
      }
      const convertedValue = new UnitConverter(
        unitValue,
        unitCategory,
        conversionRatesJSON
      )
        .from(window.localStorage.getItem("currentUnit"))
        .to(input.id);
      input.value = convertedValue;
    });
  }, [unitValue]);

  return (
    <section className="p-4 space-y-2 w-1/3">
      <h3 className="text-xl font-bold text-[#24285b]">
        {unitName} [{unitSymbol}].
      </h3>
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
