import { FC, useState } from 'react';
import { chars, defaultHeadline, headlines } from '../data';

const Headline: FC = () => {
    const [headline, setHeadline] = useState(defaultHeadline);

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
    };

    const handleMouseLeave = () => {
        setHeadline(headline.toUpperCase());
    };

    return (
        <div className="relative">
            <h1 className="text-2xl md:text-4xl font-bold text-center px-2 py-4 md:py-8">
                <span
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
