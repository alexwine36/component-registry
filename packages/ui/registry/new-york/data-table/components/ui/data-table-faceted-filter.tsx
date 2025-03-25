import { flexRender } from '@tanstack/react-table';
import { Check, PlusCircle } from 'lucide-react';

import { Badge } from '@/registry/new-york/common/components/ui/badge';
import { Button } from '@/registry/new-york/common/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/registry/new-york/common/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/registry/new-york/common/components/ui/popover';
import { Separator } from '@/registry/new-york/common/components/ui/separator';
import { cn } from '@/registry/new-york/common/lib/utils';
import type {
  Column,
  Header,
} from '@/registry/new-york/data-table/lib/data-table-types';
import { formatFacets } from '@/registry/new-york/data-table/lib/data-table-utils';

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  header?: Header<TData, TValue>;
  // title?: string;
  //   options: Option[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  header,
  // title,
  //   options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const options = formatFacets(column);
  if (options.length <= 1) {
    return null;
  }
  const title = column?.columnDef.header?.toString();

  const unknownValue = column?.getFilterValue();
  const selectedValues = new Set(
    Array.isArray(unknownValue) ? unknownValue : []
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="size-4" />
          {header
            ? flexRender(column?.columnDef.header, header.getContext())
            : title}

          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge className="border-transparent bg-muted px-1 font-normal text-muted-foreground hover:bg-muted/80 lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge className="border-transparent bg-muted px-1 font-normal text-muted-foreground hover:bg-muted/80">
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        key={option.value}
                        className="border-transparent bg-muted px-1 font-normal text-muted-foreground hover:bg-muted/80"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[12.5rem] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList className="max-h-full">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup className="max-h-[18.75rem] overflow-y-auto overflow-x-hidden">
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);

                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      );
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex size-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <Check className="size-4" aria-hidden="true" />
                    </div>
                    {/*option.icon && (
                      <option.icon
                        className="mr-2 size-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    ) */}
                    <span>{option.label}</span>
                    {option.count && (
                      <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs">
                        {option.count}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
