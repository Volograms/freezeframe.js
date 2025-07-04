import { SelectorOrNodes, FreezeframeOptions } from '../../types/index';
export declare const pipe: (...fns: Function[]) => (...initArgs: any[]) => any;
export declare const formatMessage: (string: string) => string;
export declare const error: (message: string, ...args: any[]) => void;
export declare const warn: (message: string, ...args: any[]) => void;
export declare const isTouch: () => boolean;
export declare const parseFilename: (filePath: string, length: number) => string;
export declare const validateFilename: (filePath: string) => boolean;
export declare const normalizeElements: (selectorOrNodes: SelectorOrNodes) => Element | HTMLCollectionOf<Element> | NodeListOf<Element>;
export declare const validateElements: (elements: Element | Element[], _: any, options: FreezeframeOptions) => any[];
export declare const dedupeImages: (images: HTMLImageElement[]) => HTMLImageElement[];
export declare const htmlToNode: (html: string) => HTMLElement;
export declare const wrapNode: ($el: HTMLElement, $wrapper: HTMLElement) => void;
