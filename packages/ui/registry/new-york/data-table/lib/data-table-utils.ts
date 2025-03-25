import { pipe, capitalize as rCapitalize, toKebabCase } from 'remeda';

export function toSentenceCase(str: string) {
  return pipe(str, toKebabCase(), (s) => s.replace(/-/g, ' '), rCapitalize());
}
