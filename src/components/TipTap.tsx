"use client";
import React, { useState } from "react";
import "./style.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import { TipTapProps } from "./types";

export function RichTextEditor({
  boldIcon,
  italicIcon,
  strikethroughIcon,
  codeIcon,
  heading1Icon,
  heading2Icon,
  heading3Icon,
  bulletListIcon,
  orderedListIcon,
  codeBlockIcon,
  blockquoteIcon,
  undoIcon,
  redoIcon,
  showBold,
  showItalic,
  showStrikethrough,
  showCode,
  showHeading1,
  showHeading2,
  showHeading3,
  showBulletList,
  showOrderedList,
  showCodeBlock,
  showBlockquote,
  showUndoIcon,
  showRedoIcon,
  editorClass,
  onchange,
  buttonStyle,
}: TipTapProps) {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class: editorClass,
      },
    },
    onUpdate({ editor }) {
      // console.log(editor.getHTML());
      onchange && onchange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <Menubar
        editor={editor}
        showBold={showBold}
        showItalic={showItalic}
        showStrikethrough={showStrikethrough}
        showCode={showCode}
        showHeading1={showHeading1}
        showHeading2={showHeading2}
        showHeading3={showHeading3}
        showBulletList={showBulletList}
        showOrderedList={showOrderedList}
        showCodeBlock={showCodeBlock}
        showBlockquote={showBlockquote}
        showUndoIcon={showUndoIcon}
        showRedoIcon={showRedoIcon}
        boldIcon={boldIcon}
        italicIcon={italicIcon}
        strikethroughIcon={strikethroughIcon}
        codeIcon={codeIcon}
        heading1Icon={heading1Icon}
        heading2Icon={heading2Icon}
        heading3Icon={heading3Icon}
        bulletListIcon={bulletListIcon}
        orderedListIcon={orderedListIcon}
        codeBlockIcon={codeBlockIcon}
        blockquoteIcon={blockquoteIcon}
        undoIcon={undoIcon}
        redoIcon={redoIcon}
        buttonStyle={buttonStyle}
      />
      <EditorContent editor={editor} />
    </>
  );
}
