import { PaperDirection } from '../dataset/enum/Editor';
export interface IPrintImageBase64Option {
    width: number;
    height: number;
    direction?: PaperDirection;
}
export declare function printImageBase64(base64List: string[], options: IPrintImageBase64Option): void;
