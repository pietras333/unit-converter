class UnitConverter {
  constructor(value, dimension, conversionRates) {
    this.value = value;
    this.dimension = dimension;
    this.conversionRates = conversionRates;
  }

  from(fromUnit) {
    this.fromUnit = fromUnit;
    return this;
  }

  to(toUnit) {
    const fromRate = this.conversionRates[this.dimension][this.fromUnit];
    const toRate = this.conversionRates[this.dimension][toUnit];

    return this.value * (toRate / fromRate);
  }
}

export default UnitConverter;
