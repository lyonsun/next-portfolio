'use client';

import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { chars, defaultHeadline, headlines } from '../data';

const Headline: FC = () => {
    const [headline, setHeadline] = useState(defaultHeadline);
    const [animateVariant, setAnimateVariant] = useState('initial');
    const [width, setWidth] = useState(0);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const headlineTextRef = useRef<HTMLHeadingElement>(null);

    const variants = {
        initial: {
            x: '0',
        },
        enter: {
            x: `${width - 76}px`,
        },
    };

    let interalId: number;
    let numberOfIteration = 0;
    const updateHeadline = (target: HTMLSpanElement) => {
        if (interalId) {
            window.clearInterval(interalId);
        }
        const newHeadline =
            headlines[
                Math.floor(Math.random() * headlines.length)
            ].toUpperCase();
        setHeadline(newHeadline);
        interalId = window.setInterval(() => {
            target.innerText = newHeadline
                .split('')
                .map((char, index) => {
                    return index < numberOfIteration
                        ? char
                        : chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');
            if (numberOfIteration > newHeadline.length) {
                window.clearInterval(interalId);
            }

            numberOfIteration += 1;
        }, 100);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        updateHeadline(target);
        setAnimateVariant('enter');
    };

    const handleMouseLeave = () => {
        setHeadline(headline.toUpperCase());
        setAnimateVariant('initial');
    };

    useEffect(() => {
        if (!headingRef.current) return;
        setWidth(headingRef.current.offsetWidth);
    }, []);

    return (
        <div className="relative">
            <motion.div
                className="absolute w-20 h-px bottom-0 bg-gradient-to-r from-indigo-300 via-indigo-700 to-indigo-300 origin-left"
                variants={variants}
                animate={animateVariant}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.4,
                }}
            />

            <h1
                ref={headingRef}
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-center px-2 py-4 md:py-8"
            >
                <span
                    ref={headlineTextRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {headline.toUpperCase()}
                </span>
            </h1>
        </div>
    );
};

export { Headline };
