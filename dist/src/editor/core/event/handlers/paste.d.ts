import { IElement } from '../../../interface/Element';
import { IPasteOption } from '../../../interface/Event';
import { CanvasEvent } from '../CanvasEvent';
export declare function pasteElement(host: CanvasEvent, elementList: IElement[]): void;
export declare function pasteHTML(host: CanvasEvent, htmlText: string): void;
export declare function pasteImage(host: CanvasEvent, file: File | Blob): void;
export declare function pasteByEvent(host: CanvasEvent, evt: ClipboardEvent): void;
export declare function pasteByApi(host: CanvasEvent, options?: IPasteOption): Promise<void>;
