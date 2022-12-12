export class MediaContainer {
  name: string;
  type: string;
  link: string;
  size: string;

  constructor(n: string, t: string, l: string, s: string){
    this.name = n ?? '';
    this.type = t ?? '';
    this.link = l ?? '';
    this.size = s ?? '';
  }
}
