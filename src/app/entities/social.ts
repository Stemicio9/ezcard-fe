export class Social {

  name?: string;
  iconPath?: string;
  placeholder?: string;

  constructor(name: string, iconPath: string, placeHolder: string){
    this.name = name;
    this.iconPath = iconPath;
    this.placeholder = placeHolder;
  }
}
