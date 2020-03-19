import React from "react";

import { regReactProps } from "./regReactProps";

export type IonicReactExternalProps<PropType, ElementType> = PropType &
  Omit<React.HTMLAttributes<ElementType>, "style"> &
  regReactProps;

export const createForwardRef = <PropType, ElementType>(
  ReactComponent: any,
  displayName: string
) => {
  const forwardRef = (
    props: IonicReactExternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>
  ) => {
    return <ReactComponent {...props} forwardedRef={ref} />;
  };
  forwardRef.displayName = displayName;

  return React.forwardRef(forwardRef);
};

export * from "./attachProps";
export * from "./case";
