import { enGB } from "../i18n";
import { LanguageTable } from "../types";

export enum LanguagesOptions {
  EnGb = "en-gb",
  De = "de",
}

export const LANGUAGES: LanguageTable = {
  [LanguagesOptions.EnGb]: enGB,
};
