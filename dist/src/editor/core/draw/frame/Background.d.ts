import { Draw } from '../Draw';
export declare class Background {
    private draw;
    private options;
    private imageCache;
    constructor(draw: Draw);
    private _renderBackgroundColor;
    private _drawImage;
    private _renderBackgroundImage;
    render(ctx: CanvasRenderingContext2D, pageNo: number): void;
}
