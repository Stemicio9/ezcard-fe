export class CountryRenewableElectricityItem {
  public constructor(init: Partial<CountryRenewableElectricityItem>) {
      Object.assign(this, init);
  }

  public year: string | undefined;
  public europe: number | undefined;
  public america: number | undefined;


}

export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
  public constructor() {
      super();
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2009`,
          europe: 34,
          america: 19
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2010`,
          europe: 43,
          america: 24
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2011`,
          europe: 66,
          america: 28
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2012`,
          europe: 69,
          america: 26
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2013`,
          europe: 58,
          america: 38
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2014`,
          europe: 40,
          america: 31
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2015`,
          europe: 78,
          america: 19
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2016`,
          europe: 13,
          america: 52
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2017`,
          europe: 78,
          america: 50
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2018`,
          europe: 40,
          america: 34
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2018`,
          europe: 40,
          america: 34
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: `2019`,
          europe: 80,
          america: 38
      }));
  }
}
