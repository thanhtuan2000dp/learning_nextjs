export default function RadioOption(props: RadioOptionProps) {
    return (
        <div>
            <input type="radio" value={props.value} />
            <label htmlFor={props.value}>{props.value}</label>
        </div>
    );
}

type RadioOptionProps = {
    value: string;
    // checked: boolean;
    // onChange: Function;
    children: React.ReactNode;
};
