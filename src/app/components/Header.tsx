import { useUser } from "../contexts/UserContext";

export default function Header(props: {
    title: string;
    children: React.ReactNode;
}) {
    const user = useUser();
    return (
        <div>
            Hello From {props.title}
            {props.children}
            Name {user.name}
        </div>
    );
}
