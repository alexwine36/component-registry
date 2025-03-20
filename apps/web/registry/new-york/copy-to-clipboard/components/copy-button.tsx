import { Button, ButtonProps } from "@/registry/new-york/common/components/ui/button";
import { copyToClipboard } from "@/registry/new-york/copy-to-clipboard/lib/copy-to-clipboard";
import { Clipboard } from "lucide-react";

type CopyButtonProps = {
    buttonProps?: ButtonProps;
    value: string;
}


export const CopyButton = ({ buttonProps, value }: CopyButtonProps) => {
    const handleClick = () => {
        copyToClipboard(value);
    }
    return (
        <Button 
        onClick={handleClick}
        variant="outline" size="icon" {...buttonProps}>
            <Clipboard />
        </Button>
    )
}