import { cn } from '@/registry/new-york/common/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type * as React from 'react';

const headingVariants = cva('scroll-m-20 font-light tracking-normal ', {
  variants: {
    level: {
      1: 'text-4xl lg:text-5xl',
      2: 'text-3xl first:mt-0',
      3: 'text-2xl ',
      4: 'text-xl ',
    },
    separator: {
      default: '',
      bottom: 'border-b pb-1',
    },
    colorVariant: {
      default: '',
      // cool: 'bg-cool text-transparent !bg-clip-text !bg-cover !bg-center pb-1',
    },
  },
  defaultVariants: {
    level: 1,
    colorVariant: 'default',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  // level: 1 | 2 | 3 | 4;
}

export const Heading = ({
  className,
  level = 1,
  colorVariant,
  separator,
  ...props
}: HeadingProps) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const Comp = `h${level}` as any;

  return (
    <Comp
      className={cn(
        headingVariants({ separator, level, colorVariant, className })
      )}
      {...props}
    />
  );
};

const textVariants = cva('max-w-prose', {
  variants: {
    variant: {
      default: 'leading-7 [&:not(:first-child)]:mt-6',
      muted: 'text-muted-foreground',
      bold: 'font-semibold',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm',
      lead: 'text-muted-foreground text-xl',
    },
    size: {
      default: '',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = ({ className, size, variant, ...props }: TextProps) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let Comp: any = 'p'; // `h${variant}` as any;

  if (variant === 'blockquote') {
    Comp = 'blockquote';
  }
  if (variant === 'code') {
    Comp = 'code';
  }
  return (
    <Comp
      className={cn(textVariants({ size, variant, className }))}
      {...props}
    />
  );
};
