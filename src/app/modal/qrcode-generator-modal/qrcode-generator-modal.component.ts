import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../services/auth.service";
import {UtilityService} from "../../services/utility.service";

@Component({
  selector: 'app-qrcode-generator-modal',
  templateUrl: './qrcode-generator-modal.component.html',
  styleUrls: ['./qrcode-generator-modal.component.css']
})
export class QrcodeGeneratorModalComponent implements OnInit {

  @Input() public data: any;

  public qrCodeImage: any;
  public link: string = '';

  constructor(private modalService: NgbModal, private authService: AuthService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.authService.generateQRCode(this.data.username).subscribe((res) => {
      this.qrCodeImage = this.utilityService.createSanitizedImageFromBlob(res, 'png');
      this.authService.retrieveProfileLink(this.data.username).subscribe((r) => {
        this.link = r;
      });
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
