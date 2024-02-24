'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
        <div className="relative bg-gradient-to-br from-indigo-800 to-pink-500 overflow-hidden">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="relative">
                    <motion.div
                        className="absolute w-20 h-px bottom-0"
                        variants={variants}
                        animate={animateVariant}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1.4,
                        }}
                        style={{
                            background: 'radial-gradient(cyan,transparent)',
                        }}
                    />
                    <h1
                        ref={ref}
                        className="text-2xl md:text-6xl font-bold uppercase text-white text-center py-8"
                        onMouseEnter={() => setAnimateVariant('enter')}
                        onMouseLeave={() => setAnimateVariant('initial')}
                    >
                        👨🏻‍💻 I am a web developer
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
