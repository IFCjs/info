import p from "path";
import { getFile, setFile } from "./utils.mjs";

export class TranslationMemory {
  /** @type { import("./types").File } */
  storage;

  /** @type { import("./types").Memory } */
  memory;

  /**
   * @param { import("./types").Options } options
   */
  constructor({ cwd = process.cwd(), memory, storage = "./memory.json" }) {
    if (memory) {
      this.memory = memory;
    } else {
      try {
        this.storage = getFile(p.resolve(cwd, storage)).value;
        const memory = JSON.parse(this.storage.value);
        this.memory = memory;
      } catch {
        this.storage = { path: p.resolve(cwd, storage), value: "" };
        this.memory = {};
      }
    }
  }

  serialize() {
    const file = {
      path: this.storage.path,
      value: JSON.stringify(this.memory),
    };

    setFile(file);
  }

  /**
   * @param { string } source
   * @param { string } language
   * @returns { string }
   */
  get(source, language) {
    return this.memory[source][language];
  }

  /**
   * @param { string } source
   * @param { string } language
   * @param { string } value
   */
  set(source, language, value) {
    this.memory[source][language] = value;
  }
}
