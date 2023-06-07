"use client";
import { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent: any) => {
    return (props: Object) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        });

        useEffect(() => {
            const handleMousePositionChange = (e: any) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener("mouseover", handleMousePositionChange);

            return () => {
                window.removeEventListener(
                    "mouseover",
                    handleMousePositionChange
                );
            };
        }, []);

        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

const PanelMouseLogger = ({
    mousePosition,
}: {
    mousePosition: { x: string; y: string };
}) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTracker">
            <p>Mouse Position:</p>
            <div>
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({
    mousePosition,
}: {
    mousePosition: { x: string; y: string };
}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function LearnHOC() {
    return (
        <div>
            <div>
                <header className="header">Little Lemon Restaurant</header>
                <PanelMouseTracker />
                <PointMouseTracker />
            </div>
        </div>
    );
}
