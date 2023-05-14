export default function Header(props: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            Hello From {props.title}
            {props.children}
        </div>
    );
}
