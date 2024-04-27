import { IEditorOption, IElement } from '..';
import { DeepRequired } from '../interface/Common';
export interface IClipboardData {
    text: string;
    elementList: IElement[];
}
export declare function setClipboardData(data: IClipboardData): void;
export declare function getClipboardData(): IClipboardData | null;
export declare function removeClipboardData(): void;
export declare function writeClipboardItem(text: string, html: string, elementList: IElement[]): void;
export declare function writeElementList(elementList: IElement[], options: DeepRequired<IEditorOption>): void;
