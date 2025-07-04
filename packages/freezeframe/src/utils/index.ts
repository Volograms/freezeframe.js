import { SelectorOrNodes, FreezeframeOptions } from '../../types/index';

export const pipe = (...fns: Function[]) => (
  (...initArgs: any[]) => {
    return fns.reduceRight(((f, g) => (...args: any[]) => f(g(...args, ...initArgs))))();
  }
);

export const formatMessage = (string: string): string => `✨Freezeframe: ${string}✨`;

export const error = (message: string, ...args: any[]): void => {
  console.error(formatMessage(message), ...args);
};

export const warn = (message: string, ...args: any[]): void => {
  console.warn(formatMessage(message), ...args);
};

export const isTouch = (): boolean => {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

export const parseFilename = (filePath: string, length: number): string => {
  return filePath
    .split('.')
    .pop()
    .toLowerCase()
    .substring(0, length);
};

export const validateFilename = (filePath: string): boolean => {
  const extGif = parseFilename(filePath, 3);
  const extWebp = parseFilename(filePath, 4);
  return extGif === 'gif' || extWebp === 'webp';
};

export const normalizeElements = (selectorOrNodes: SelectorOrNodes) => {
  return typeof selectorOrNodes === 'string'
    ? document.querySelectorAll(selectorOrNodes)
    : selectorOrNodes;
};

export const validateElements = (
  elements: Element | Element[],
  _: any,
  options: FreezeframeOptions
) => {
  const list = elements instanceof Element ? [elements] : elements;
  return Array.from(list).reduce((acc, image) => {
    if (!(image instanceof HTMLImageElement)) {
      const $children = image.querySelectorAll('img');
      if (!$children.length) {
        error('Invalid element', image);
      } else {
        acc = acc.concat(Array.from($children)); // eslint-disable-line no-param-reassign
      }
    } else {
      acc.push(image);
      if (!(validateFilename(image.src))) {
        if (options.warnings) warn('Image does not appear to be a gif', image);
      }
    }
    return acc;
  }, []);
};

export const dedupeImages = (images: HTMLImageElement[]) => {
  return [...new Set(images)];
};

export const htmlToNode = (html: string) => {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html;
  const $content = $wrap.childNodes;
  return ($content.length > 1
    ? $content
    : $content[0]) as HTMLElement;
};

export const wrapNode = ($el: HTMLElement, $wrapper: HTMLElement) => {
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};
