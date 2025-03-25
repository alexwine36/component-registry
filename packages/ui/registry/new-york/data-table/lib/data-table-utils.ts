import type { Column } from '@/registry/new-york/data-table/lib/data-table-types';
import {
  pipe,
  prop,
  capitalize as rCapitalize,
  sortBy,
  toKebabCase,
} from 'remeda';

export function toSentenceCase(str: string) {
  return pipe(str, toKebabCase(), (s) => s.replace(/-/g, ' '), rCapitalize());
}

export const formatFacets = <TData, TValue>(column?: Column<TData, TValue>) => {
  const facets = column?.getFacetedUniqueValues() || new Map<unknown, number>();

  const options = Array.from(facets, ([value, count]) => ({
    value,
    label: value,
    count,
  }));

  return sortBy(options, [prop('count'), 'desc']);
};
