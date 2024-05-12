class UnitConverter {
  // Constructor to initialize the object with value, dimension, and conversion rates
  constructor(value, dimension, conversionRates) {
    this.value = value; // Value to be converted
    this.dimension = dimension; // Dimension of the units (e.g., length, volume)
    this.conversionRates = conversionRates; // Conversion rates for different units
  }

  // Specify the unit to convert from
  from(fromUnit) {
    this.fromUnit = fromUnit;
    return this; // Return the object to enable method chaining
  }

  // Specify the unit to convert to and perform the conversion
  to(toUnit) {
    // Get conversion rates for the specified units
    const fromRate = this.conversionRates[this.dimension][this.fromUnit];
    const toRate = this.conversionRates[this.dimension][toUnit];

    // Perform the conversion and return the result
    return this.value * (toRate / fromRate);
  }
}

export default UnitConverter;
