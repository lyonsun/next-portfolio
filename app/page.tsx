'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from './components/SocialLink';

const Home: FC = () => {
    const defaultHeadline = 'I AM A WEB DEVELOPER';
    const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(
            ''
        );

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

    const updateHeadline = () => {
        const newHeadline = Array.from(
            { length: 20 },
            () => chars[Math.floor(Math.random() * chars.length)]
        ).join('');
        setHeadline(newHeadline);
    };

    const handleMouseMove = () => {
        updateHeadline();
    };

    const handleMouseLeave = () => {
        setHeadline(defaultHeadline);
        setAnimateVariant('initial');
    };

    useEffect(() => {
        if (!headingRef.current) return;
        setWidth(headingRef.current.offsetWidth);
    }, []);

    return (
        <div className="relative bg-indigo-300 overflow-hidden">
            <div className="h-screen w-screen flex flex-col justify-center items-center gap-20">
                <div className="relative">
                    <motion.div
                        className="absolute w-20 h-1 bottom-0 bg-gradient-to-r from-indigo-300 via-indigo-700 to-indigo-300"
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
                        onMouseEnter={() => setAnimateVariant('enter')}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        👨🏻‍💻 <span ref={headlineTextRef}>{headline}</span>
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <SocialLink
                        linkURL="https://www.linkedin.com/in/lyonsun7"
                        iconURL="/images/linkedin.svg"
                        iconName="linkedin-profile"
                        isExternalLink
                    />
                    <SocialLink
                        linkURL="https://github.com/lyonsun"
                        iconURL="/images/github.svg"
                        iconName="github-profile"
                        isExternalLink
                    />
                    <SocialLink
                        linkURL="mailto:sunly917@gmail.com"
                        iconURL="/images/email.svg"
                        iconName="email-contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
