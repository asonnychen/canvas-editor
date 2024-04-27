import { IElement, IElementPosition } from '../../../../interface/Element';
import { Draw } from '../../Draw';
export declare class DateParticle {
    private draw;
    private range;
    private datePicker;
    constructor(draw: Draw);
    private _setValue;
    getDateElementRange(): [number, number] | null;
    clearDatePicker(): void;
    renderDatePicker(element: IElement, position: IElementPosition): void;
}
