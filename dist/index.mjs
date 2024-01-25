// src/components/TipTap.tsx
import React2 from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// src/components/Menubar.tsx
import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
function Menubar({
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
  buttonStyle
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, showBold && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("bold"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBold()?.run()
    },
    boldIcon
  ), showItalic && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("italic"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleItalic()?.run()
    },
    italicIcon
  ), showStrikethrough && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("strike"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleStrike()?.run()
    },
    strikethroughIcon
  ), showCode && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("code"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleCode()?.run()
    },
    codeIcon
  ), showHeading1 && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 1 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 1 })?.run()
    },
    heading1Icon
  ), showHeading2 && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 2 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 2 })?.run()
    },
    heading2Icon
  ), showHeading3 && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 3 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 3 })?.run()
    },
    heading3Icon
  ), showBulletList && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("bulletList"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBulletList()?.run()
    },
    bulletListIcon
  ), showOrderedList && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("orderedList"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleOrderedList()?.run()
    },
    orderedListIcon
  ), showCodeBlock && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("codeBlock"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleCodeBlock()?.run()
    },
    codeBlockIcon
  ), showBlockquote && /* @__PURE__ */ React.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("blockquote"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBlockquote()?.run()
    },
    blockquoteIcon
  ), showUndoIcon && /* @__PURE__ */ React.createElement(
    "button",
    {
      className: buttonStyle,
      onClick: () => editor?.chain()?.focus()?.undo()?.run(),
      disabled: !editor?.can()?.chain()?.focus()?.undo()?.run()
    },
    undoIcon
  ), showRedoIcon && /* @__PURE__ */ React.createElement(
    "button",
    {
      className: buttonStyle,
      onClick: () => editor?.chain()?.focus()?.redo()?.run(),
      disabled: !editor?.can()?.chain()?.focus()?.redo()?.run()
    },
    redoIcon
  ));
}

// src/components/TipTap.tsx
function RichTextEditor({
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
  buttonStyle
}) {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class: editorClass
      }
    },
    onUpdate({ editor: editor2 }) {
      onchange && onchange(editor2.getHTML());
    }
  });
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
    Menubar,
    {
      editor,
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
      buttonStyle
    }
  ), /* @__PURE__ */ React2.createElement(EditorContent, { editor }));
}
export {
  RichTextEditor
};
