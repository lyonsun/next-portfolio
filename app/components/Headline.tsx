'use client';

import { FC, useEffect, useState } from 'react';
import { chars, defaultHeadline, headlines } from '../data';

const Headline: FC = () => {
    const [headline, setHeadline] = useState(defaultHeadline);

    let interalId = 0;
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

    useEffect(() => {
        const mainIntervalId = window.setInterval(() => {
            updateHeadline(
                document.querySelector('.headline') as HTMLHeadingElement
            );
        }, 4000);

        return () => window.clearInterval(mainIntervalId);
    });

    return (
        <div className="relative">
            <h1 className="headline text-xl md:text-4xl font-bold text-center px-2 py-4 md:py-8">
                {headline.toUpperCase()}
            </h1>
        </div>
    );
};

export { Headline };
