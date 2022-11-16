export class Contact {

  name?: string;
  iconPath?: string;
  placeholder?: string;

  constructor(n: string, i: string, p: string){
    this.name = n;
    this.iconPath = i;
    this.placeholder = p;
  }
}
