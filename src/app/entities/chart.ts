export class CountryRenewableElectricityItem {
  public constructor(init: Partial<CountryRenewableElectricityItem>) {
    Object.assign(this, init);
  }

  public month: string | undefined;
  public views: number | undefined;
}

export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
  public constructor() {
    super();
    this.push(
      new CountryRenewableElectricityItem({
        month: `Gen`,
        views: 34,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Feb`,
        views: 43,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Mar`,
        views: 66,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Apr`,
        views: 69,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Mag`,
        views: 58,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Giu`,
        views: 40,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Lug`,
        views: 78,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Ago`,
        views: 13,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Set`,
        views: 78,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Ott`,
        views: 40,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Nov`,
        views: 40,
      })
    );
    this.push(
      new CountryRenewableElectricityItem({
        month: `Dic`,
        views: 80,
      })
    );
  }
}
