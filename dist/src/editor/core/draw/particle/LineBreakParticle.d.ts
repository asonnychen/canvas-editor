import { IRowElement } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class LineBreakParticle {
    private options;
    static readonly WIDTH = 12;
    static readonly HEIGHT = 9;
    static readonly GAP = 3;
    constructor(draw: Draw);
    render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number): void;
}
