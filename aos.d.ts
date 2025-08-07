declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    init: any;
  }

  export function init(options?: AosOptions): void;

  export = init;
}
