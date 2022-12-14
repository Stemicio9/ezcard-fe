import {Views} from 'src/app/entities/views_table';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {IgxCategoryChartComponent, IgxLegendComponent} from 'igniteui-angular-charts';
import {CountryRenewableElectricity} from 'src/app/entities/chart';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {


  @ViewChild("legend", { static: true } )
   legend?: IgxLegendComponent;
   @ViewChild("legend", { static: true } )
   legendMobile?: IgxLegendComponent;
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

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null;
	toDate: NgbDate | null


  constructor(private _detector: ChangeDetectorRef, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 30);
	}

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}




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
