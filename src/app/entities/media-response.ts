export class MediaResponse {
    name: string;
    type: string;
    size: string;
    file: any;

    constructor(name?: string, type?: string, size?: string, file?: any){
      this.name =name ?? '';
      this.type = type ?? '';
      this.size = size ?? '';
      this.file = file ?? '';
    }
}
