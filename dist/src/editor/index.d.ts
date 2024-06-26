import './assets/css/index.css';
import { IEditorData, IEditorOption, IEditorResult } from './interface/Editor';
import { IElement } from './interface/Element';
import { Command } from './core/command/Command';
import { Listener } from './core/listener/Listener';
import { RowFlex } from './dataset/enum/Row';
import { ImageDisplay } from './dataset/enum/Common';
import { ElementType } from './dataset/enum/Element';
import { Register } from './core/register/Register';
import { IContextMenuContext, IRegisterContextMenu } from './interface/contextmenu/ContextMenu';
import { EditorComponent, EditorZone, EditorMode, PageMode, PaperDirection, WordBreak } from './dataset/enum/Editor';
import { EDITOR_COMPONENT } from './dataset/constant/Editor';
import { IWatermark } from './interface/Watermark';
import { ControlIndentation, ControlType } from './dataset/enum/Control';
import { INavigateInfo } from './core/draw/interactive/Search';
import { KeyMap } from './dataset/enum/KeyMap';
import { BlockType } from './dataset/enum/Block';
import { IBlock } from './interface/Block';
import { ILang } from './interface/i18n/I18n';
import { VerticalAlign } from './dataset/enum/VerticalAlign';
import { TableBorder, TdBorder, TdSlash } from './dataset/enum/table/Table';
import { MaxHeightRatio, NumberType } from './dataset/enum/Common';
import { TitleLevel } from './dataset/enum/Title';
import { ListStyle, ListType } from './dataset/enum/List';
import { ICatalog, ICatalogItem } from './interface/Catalog';
import { UsePlugin } from './interface/Plugin';
import { EventBus } from './core/event/eventbus/EventBus';
import { EventBusMap } from './interface/EventBus';
import { IRangeStyle } from './interface/Listener';
import { Override } from './core/override/Override';
import { LETTER_CLASS } from './dataset/constant/Common';
import { INTERNAL_CONTEXT_MENU_KEY } from './dataset/constant/ContextMenu';
import { IRange } from './interface/Range';
import { splitText } from './utils';
import { BackgroundRepeat, BackgroundSize } from './dataset/enum/Background';
import { TextDecorationStyle } from './dataset/enum/Text';
export default class Editor {
    command: Command;
    listener: Listener;
    eventBus: EventBus<EventBusMap>;
    override: Override;
    register: Register;
    destroy: () => void;
    use: UsePlugin;
    constructor(container: HTMLDivElement, data: IEditorData | IElement[], options?: IEditorOption);
}
export { splitText };
export { EDITOR_COMPONENT, LETTER_CLASS, INTERNAL_CONTEXT_MENU_KEY };
export { Editor, RowFlex, VerticalAlign, EditorZone, EditorMode, ElementType, ControlType, EditorComponent, PageMode, ImageDisplay, Command, KeyMap, BlockType, PaperDirection, TableBorder, TdBorder, TdSlash, MaxHeightRatio, NumberType, TitleLevel, ListType, ListStyle, WordBreak, ControlIndentation, BackgroundRepeat, BackgroundSize, TextDecorationStyle };
export type { IElement, IEditorData, IEditorOption, IEditorResult, IContextMenuContext, IRegisterContextMenu, IWatermark, INavigateInfo, IBlock, ILang, ICatalog, ICatalogItem, IRange, IRangeStyle };
