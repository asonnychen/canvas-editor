import { IRowElement } from '../../../../../interface/Row';
export declare class IFrameBlock {
    private static readonly sandbox;
    private element;
    constructor(element: IRowElement);
    private _defineIframeProperties;
    render(blockItemContainer: HTMLDivElement): void;
}
