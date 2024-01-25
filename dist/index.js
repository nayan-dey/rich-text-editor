"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RichTextEditor: () => RichTextEditor
});
module.exports = __toCommonJS(src_exports);

// src/components/TipTap.tsx
var import_react2 = __toESM(require("react"));
var import_react3 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));

// src/components/Menubar.tsx
var import_react = __toESM(require("react"));
var Toggle = __toESM(require("@radix-ui/react-toggle"));
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, showBold && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("bold"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBold()?.run()
    },
    boldIcon
  ), showItalic && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("italic"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleItalic()?.run()
    },
    italicIcon
  ), showStrikethrough && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("strike"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleStrike()?.run()
    },
    strikethroughIcon
  ), showCode && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("code"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleCode()?.run()
    },
    codeIcon
  ), showHeading1 && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 1 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 1 })?.run()
    },
    heading1Icon
  ), showHeading2 && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 2 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 2 })?.run()
    },
    heading2Icon
  ), showHeading3 && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("heading", { level: 3 }),
      onPressedChange: () => editor?.chain()?.focus()?.toggleHeading({ level: 3 })?.run()
    },
    heading3Icon
  ), showBulletList && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("bulletList"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBulletList()?.run()
    },
    bulletListIcon
  ), showOrderedList && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("orderedList"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleOrderedList()?.run()
    },
    orderedListIcon
  ), showCodeBlock && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("codeBlock"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleCodeBlock()?.run()
    },
    codeBlockIcon
  ), showBlockquote && /* @__PURE__ */ import_react.default.createElement(
    Toggle.Root,
    {
      className: buttonStyle,
      pressed: editor?.isActive("blockquote"),
      onPressedChange: () => editor?.chain()?.focus()?.toggleBlockquote()?.run()
    },
    blockquoteIcon
  ), showUndoIcon && /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: buttonStyle,
      onClick: () => editor?.chain()?.focus()?.undo()?.run(),
      disabled: !editor?.can()?.chain()?.focus()?.undo()?.run()
    },
    undoIcon
  ), showRedoIcon && /* @__PURE__ */ import_react.default.createElement(
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
  const editor = (0, import_react3.useEditor)({
    extensions: [import_starter_kit.default.configure()],
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
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
  ), /* @__PURE__ */ import_react2.default.createElement(import_react3.EditorContent, { editor }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RichTextEditor
});
