import { IElementFillRect } from '../../../../interface/Element';
import { Draw } from '../../Draw';
export declare class ControlBorder {
    protected borderRect: IElementFillRect;
    private options;
    constructor(draw: Draw);
    clearBorderInfo(): IElementFillRect;
    recordBorderInfo(x: number, y: number, width: number, height: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
