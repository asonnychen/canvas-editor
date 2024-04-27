import { AbstractRichText } from './AbstractRichText';
import { Draw } from '../Draw';
export declare class Underline extends AbstractRichText {
    private options;
    constructor(draw: Draw);
    private _drawLine;
    private _drawDouble;
    private _drawWave;
    render(ctx: CanvasRenderingContext2D): void;
}
