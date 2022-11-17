import { Views } from 'src/app/entities/views_table';
import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { CountryRenewableElectricity } from 'src/app/entities/chart';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {


  @ViewChild("legend", { static: true } )
   legend?: IgxLegendComponent;
  @ViewChild("chart", { static: true } )
   chart?: IgxCategoryChartComponent;

  views: Views[] = [
    new Views('Whatsapp', 67),
    new Views('Facebook', 54),
    new Views('Instagram', 41),
    new Views('TikTok', 29),
    new Views('Linkedin', 27),
    new Views('YouTube', 21),
    new Views('Twitter', 16),
    new Views('Pinterest', 11),
    new Views('Behance', 3),
  ];

  constructor(private _detector: ChangeDetectorRef) { }

  private _countryRenewableElectricity:  CountryRenewableElectricity | null = null;
  public get countryRenewableElectricity(): CountryRenewableElectricity {
      if (this._countryRenewableElectricity == null)
      {
          this._countryRenewableElectricity = new CountryRenewableElectricity();
      }
      return this._countryRenewableElectricity;
  }

  ngOnInit(): void {
  }

}
