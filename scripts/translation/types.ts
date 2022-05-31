export interface File {
  path: string;
  value: string;
}

// data structure for translation memory.
export interface Memory {
  [Source: string]: {
    [LanguageCode: string]: string;
  };
}

export interface Options {
  // will be used to resolve `memory.json`.
  cwd?: string;
  // path to `memory.json`.
  storage?: string;
  // initial memory.
  memory?: Memory;
}
