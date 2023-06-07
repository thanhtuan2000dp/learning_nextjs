import { Children, cloneElement } from "react";

export default function RadioGroup(props: RadioGroupProps) {
    const RadionOptions = Children.map(props.children, (child: any) => {
        return cloneElement(child as any, {
            onChange: props.onChange,
            checked: child.props.value === props.selected,
        });
    });
    console.log(RadionOptions);
    return <div>{RadionOptions}</div>;
}

type RadioGroupProps = {
    onChange: any;
    selected: string;
    children: React.ReactNode;
};
