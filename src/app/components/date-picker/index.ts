import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {NgbDateParserFormatterExtService} from "./ngb-date-parser-formatter-ext.service";

export const NgbDateParserFormatterExtProvider =
  { provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterExtService };
