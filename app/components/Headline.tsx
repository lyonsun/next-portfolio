'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { chars, defaultHeadline, headlines } from '../data';

const Headline: FC = () => {
    const [headline, setHeadline] = useState(defaultHeadline);
    const [interalId, setInteralId] = useState(0);

    const updateHeadline = useCallback(
        (target: HTMLSpanElement) => {
            if (interalId) {
                window.clearInterval(interalId);
            }
            const newHeadline =
                headlines[
                    Math.floor(Math.random() * headlines.length)
                ].toUpperCase();
            setHeadline(newHeadline);

            let numberOfIteration = 0;
            const newInteralId = window.setInterval(() => {
                target.innerText = newHeadline
                    .split('')
                    .map((char, index) => {
                        return index < numberOfIteration
                            ? char
                            : chars[
                                  Math.floor(Math.random() * chars.length)
                              ].toUpperCase();
                    })
                    .join('');
                if (numberOfIteration > newHeadline.length) {
                    window.clearInterval(interalId);
                }

                numberOfIteration++;
            }, 100);

            setInteralId(newInteralId);
        },
        [interalId]
    );

    useEffect(() => {
        const mainIntervalId = window.setInterval(() => {
            updateHeadline(
                document.querySelector('.headline') as HTMLHeadingElement
            );
        }, 4000);

        return () => window.clearInterval(mainIntervalId);
    }, [updateHeadline]);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            updateHeadline(
                document.querySelector('.headline') as HTMLHeadingElement
            );
        }, 1000);

        return () => window.clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="relative">
            <h1 className="headline text-xl md:text-4xl font-bold text-center px-2 py-4 md:py-8">
                {headline.toUpperCase()}
            </h1>
        </div>
    );
};

export { Headline };
