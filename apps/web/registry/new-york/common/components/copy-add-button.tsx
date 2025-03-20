'use client'

import { CopyButton } from "../../copy-to-clipboard/components/copy-button";


type CopyAddButtonProps = {
    name: string;
} & React.ComponentProps<typeof CopyButton>["buttonProps"]

export function CopyAddButton({name, ...props}: CopyAddButtonProps) {

    const value = `pnpm dlx shadcn@latest add ${window.location.origin}/r/${name}.json`

    return (
        <CopyButton  buttonProps={props} value={value} />
    )
} 

