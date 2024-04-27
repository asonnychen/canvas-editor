import { IElement } from '../../..';
import { IRowElement } from '../../../interface/Row';
import { ITextMetrics } from '../../../interface/Text';
import { Draw } from '../Draw';
export interface IMeasureWordResult {
    width: number;
    endElement: IElement;
}
export declare class TextParticle {
    private draw;
    private options;
    private ctx;
    private curX;
    private curY;
    private text;
    private curStyle;
    private curColor?;
    cacheMeasureText: Map<string, TextMetrics>;
    constructor(draw: Draw);
    measureBasisWord(ctx: CanvasRenderingContext2D, font: string): ITextMetrics;
    measureWord(ctx: CanvasRenderingContext2D, elementList: IElement[], curIndex: number): IMeasureWordResult;
    measurePunctuationWidth(ctx: CanvasRenderingContext2D, element: IElement): number;
    measureText(ctx: CanvasRenderingContext2D, element: IElement): ITextMetrics;
    complete(): void;
    record(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
    private _setCurXY;
    private _render;
}
