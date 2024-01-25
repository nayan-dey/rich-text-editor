"use client";
import React from "react";
import { MenubarProps } from "./types";
import * as Toggle from "@radix-ui/react-toggle";

export default function Menubar({
  editor,
  boldIcon = "bold",
  italicIcon = "italic",
  strikethroughIcon = "strikethrough",
  codeIcon = "code",
  heading1Icon = "h1",
  heading2Icon = "h2",
  heading3Icon = "h3",
  bulletListIcon = "list",
  orderedListIcon = "order list",
  codeBlockIcon = "codeblock",
  blockquoteIcon = "blockquote",
  undoIcon = "undo",
  redoIcon = "redo",
  showBold = true,
  showItalic = true,
  showStrikethrough = true,
  showCode = true,
  showHeading1 = true,
  showHeading2 = true,
  showHeading3 = true,
  showBulletList = true,
  showOrderedList = true,
  showCodeBlock = true,
  showBlockquote = true,
  showUndoIcon = true,
  showRedoIcon = true,
  buttonStyle,
}: MenubarProps) {
  return (
    <>
      {showBold && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("bold")}
          onPressedChange={() => editor?.chain()?.focus()?.toggleBold()?.run()}
        >
          {boldIcon}
        </Toggle.Root>
      )}
      {showItalic && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("italic")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleItalic()?.run()
          }
        >
          {italicIcon}
        </Toggle.Root>
      )}
      {showStrikethrough && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("strike")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleStrike()?.run()
          }
        >
          {strikethroughIcon}
        </Toggle.Root>
      )}
      {showCode && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("code")}
          onPressedChange={() => editor?.chain()?.focus()?.toggleCode()?.run()}
        >
          {codeIcon}
        </Toggle.Root>
      )}
      {showHeading1 && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleHeading({ level: 1 })?.run()
          }
        >
          {heading1Icon}
        </Toggle.Root>
      )}
      {showHeading2 && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleHeading({ level: 2 })?.run()
          }
        >
          {heading2Icon}
        </Toggle.Root>
      )}
      {showHeading3 && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("heading", { level: 3 })}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleHeading({ level: 3 })?.run()
          }
        >
          {heading3Icon}
        </Toggle.Root>
      )}
      {showBulletList && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("bulletList")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleBulletList()?.run()
          }
        >
          {bulletListIcon}
        </Toggle.Root>
      )}
      {showOrderedList && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("orderedList")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleOrderedList()?.run()
          }
        >
          {orderedListIcon}
        </Toggle.Root>
      )}
      {showCodeBlock && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("codeBlock")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleCodeBlock()?.run()
          }
        >
          {codeBlockIcon}
        </Toggle.Root>
      )}
      {showBlockquote && (
        <Toggle.Root
          className={buttonStyle}
          pressed={editor?.isActive("blockquote")}
          onPressedChange={() =>
            editor?.chain()?.focus()?.toggleBlockquote()?.run()
          }
        >
          {blockquoteIcon}
        </Toggle.Root>
      )}
      {showUndoIcon && (
        <button
          className={buttonStyle}
          onClick={() => editor?.chain()?.focus()?.undo()?.run()}
          disabled={!editor?.can()?.chain()?.focus()?.undo()?.run()}
        >
          {undoIcon}
        </button>
      )}
      {showRedoIcon && (
        <button
          className={buttonStyle}
          onClick={() => editor?.chain()?.focus()?.redo()?.run()}
          disabled={!editor?.can()?.chain()?.focus()?.redo()?.run()}
        >
          {redoIcon}
        </button>
      )}
    </>
  );
}
