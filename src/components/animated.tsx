import * as React from 'react';
import { IAnimatedProps, AnimatedPropertiesType } from "./IAnimatedProps"


export const Animated: React.FunctionComponent<
    IAnimatedProps & { children: (value: AnimatedPropertiesType) => JSX.Element }
> = (props: IAnimatedProps & { children: (value: AnimatedPropertiesType) => JSX.Element; }): JSX.Element =>
    {
        let [animatedProps, setAnimatedProps] = React.useState<AnimatedPropertiesType>(props.from);

        React.useEffect(() =>
        {
            if (props.reset)
            {
                setAnimatedProps(props.from);
            }
            const timer = setTimeout(() =>
            {
                requestAnimationFrame(() =>
                    setAnimatedProps({
                        ...(props.inverse ? props.from : props.to),
                        transition: `${props.transitionProperty || "all"} .${props.duration ||
                            700 / 100}s  cubic-bezier(.19,1,.21,1) `
                    })
                );

            }, props.delay || 0);

            return () => clearTimeout(timer);
        }, [props.reset, props.inverse]);

        return props.children(animatedProps);
    };