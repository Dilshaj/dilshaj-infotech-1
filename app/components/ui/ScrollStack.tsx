import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div className={`relative w-full h-[400px] md:h-[500px] ${itemClassName}`.trim()}>
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemDistance = 40, // Space between sticky headers
}) => {
    return (
        <div className={`relative w-full ${className}`.trim()}>
            {React.Children.map(children, (child, index) => (
                <div
                    className="sticky top-20 md:top-32"
                    style={{
                        zIndex: index + 1,
                        marginTop: index > 0 ? `-${20}px` : 0, // Slight overlap
                        paddingTop: `${index * itemDistance}px`, // Staggered top padding
                        marginBottom: '100px' // Space to scroll past
                    }}
                >
                    <div
                        className="origin-top transition-transform duration-500 will-change-transform shadow-2xl rounded-[32px] overflow-hidden bg-white"
                    >
                        {child}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScrollStack;
