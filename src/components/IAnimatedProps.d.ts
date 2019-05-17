import {CssProperties} from "react"

export type AnimatedPropertiesType =
  | CSSProperties
  | {
      [key: string]:
        | "string"
        | number
        | CSSProperties
        | {
            [key: string]: "string" | number | CSSProperties;
          };
    };

export interface IAnimatedProps {
  from: AnimatedPropertiesType;
  to: AnimatedPropertiesType;
  reset?: boolean;
  delay?: number;
  duration?: number;
  inverse?: boolean;
  transitionProperty?: string
}
