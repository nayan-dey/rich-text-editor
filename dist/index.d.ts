import React$1 from 'react';

interface TipTapProps {
    boldIcon?: React.ReactNode;
    italicIcon?: React.ReactNode;
    strikethroughIcon?: React.ReactNode;
    codeIcon?: React.ReactNode;
    heading1Icon?: React.ReactNode;
    heading2Icon?: React.ReactNode;
    heading3Icon?: React.ReactNode;
    bulletListIcon?: React.ReactNode;
    orderedListIcon?: React.ReactNode;
    codeBlockIcon?: React.ReactNode;
    blockquoteIcon?: React.ReactNode;
    undoIcon?: React.ReactNode;
    redoIcon?: React.ReactNode;
    showBold?: boolean;
    showItalic?: boolean;
    showStrikethrough?: boolean;
    showCode?: boolean;
    showHeading1?: boolean;
    showHeading2?: boolean;
    showHeading3?: boolean;
    showBulletList?: boolean;
    showOrderedList?: boolean;
    showCodeBlock?: boolean;
    showBlockquote?: boolean;
    showUndoIcon?: boolean;
    showRedoIcon?: boolean;
    onchange?: (text: string) => void;
    editorClass: string;
    buttonStyle?: string;
}

declare function RichTextEditor({ boldIcon, italicIcon, strikethroughIcon, codeIcon, heading1Icon, heading2Icon, heading3Icon, bulletListIcon, orderedListIcon, codeBlockIcon, blockquoteIcon, undoIcon, redoIcon, showBold, showItalic, showStrikethrough, showCode, showHeading1, showHeading2, showHeading3, showBulletList, showOrderedList, showCodeBlock, showBlockquote, showUndoIcon, showRedoIcon, editorClass, onchange, buttonStyle, }: TipTapProps): React$1.JSX.Element | null;

export { RichTextEditor };
