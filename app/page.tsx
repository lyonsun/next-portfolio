'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from './components/SocialLink';

const Home: FC = () => {
    const [animateVariant, setAnimateVariant] = useState('initial');
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        setWidth(ref.current.offsetWidth);
    }, []);

    const variants = {
        initial: {
            x: '0',
        },
        enter: {
            x: `${width - 80}px`,
        },
    };

    return (
        <div className="relative bg-indigo-300 overflow-hidden">
            <div className="h-screen w-screen flex flex-col justify-center items-center gap-20">
                <div className="relative">
                    <motion.div
                        className="absolute w-20 h-px bottom-0 bg-gradient-to-r from-indigo-300 via-indigo-700 to-indigo-300"
                        variants={variants}
                        animate={animateVariant}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1.4,
                        }}
                    />
                    <h1
                        ref={ref}
                        className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-center py-4 md:py-8"
                        onMouseEnter={() => setAnimateVariant('enter')}
                        onMouseLeave={() => setAnimateVariant('initial')}
                    >
                        👨🏻‍💻 I am a web developer
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
