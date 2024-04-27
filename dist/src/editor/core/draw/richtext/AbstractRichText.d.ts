import { TextDecorationStyle } from '../../../dataset/enum/Text';
import { IElementFillRect } from '../../../interface/Element';
export declare abstract class AbstractRichText {
    protected fillRect: IElementFillRect;
    protected fillColor?: string;
    protected fillDecorationStyle?: TextDecorationStyle;
    constructor();
    clearFillInfo(): IElementFillRect;
    recordFillInfo(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height?: number, color?: string, decorationStyle?: TextDecorationStyle): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
}
