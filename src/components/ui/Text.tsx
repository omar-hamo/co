import React, { ElementType } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption";

const VARIANT_TAG: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  body: "text-base",
  caption: "text-sm",
};

interface TextProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ variant, children, className }) => {
  const Tag = VARIANT_TAG[variant];
  const base = VARIANT_CLASSES[variant];
  return <Tag className={`${base} ${className || ""}`}>{children}</Tag>;
};
