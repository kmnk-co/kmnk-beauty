import {
  AnchorHTMLAttributes,
  ClassAttributes,
  HTMLAttributes,
  JSX,
} from "react";
import { ExtraProps } from "react-markdown";

const pComponent = (
  props: ClassAttributes<HTMLParagraphElement> &
    HTMLAttributes<HTMLParagraphElement> &
    ExtraProps
) => {
  return <div className="hind-light">{props.children}</div>;
};

const h1Component = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps
): JSX.Element => {
  return (
    <div className="my-4 text-4xl text-center prompt">{props.children}</div>
  );
};

const h2Component = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps
): JSX.Element => {
  return (
    <div className="my-2 text-2xl lora-normal-oblique">{props.children}</div>
  );
};

const h3Component = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps
): JSX.Element => {
  return <div className="my-2 text-xl hind-light">{props.children}</div>;
};

const strongComponent = (
  props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
) => {
  return <strong className="font-bold">{props.children}</strong>;
};

const olComponent = (
  props: ClassAttributes<HTMLOListElement> &
    HTMLAttributes<HTMLOListElement> &
    ExtraProps
): JSX.Element => {
  return (
    <ol className="my-1 pl-5 hind-light list-decimal">{props.children}</ol>
  );
};

const ulComponent = (
  props: ClassAttributes<HTMLUListElement> &
    HTMLAttributes<HTMLUListElement> &
    ExtraProps
): JSX.Element => {
  return <ul className="my-1 pl-5 hind-light list-disc">{props.children}</ul>;
};

const aComponent = (
  props: ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ExtraProps
): JSX.Element => {
  return (
    <a href={props.href} className="text-blue-500 underline">
      {props.children}
    </a>
  );
};

export const Components = {
  p: pComponent,
  h1: h1Component,
  h2: h2Component,
  h3: h3Component,
  strong: strongComponent,
  ol: olComponent,
  ul: ulComponent,
  a: aComponent,
};
