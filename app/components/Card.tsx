import { ComponentProps, FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const hideOnBottm = {
    opacity: 0,
    top: '100%',
};

const hideOnTop = {
    opacity: 0,
    bottom: '100%',
};

const showBottomUp = {
    opacity: 1,
    top: 0,
};

const showTopDown = {
    opacity: 1,
    bottom: 0,
};

type ThemeProps = ComponentProps<'div'> & {
    display: string;
};

const Card: FC<{
    theme: ThemeProps;
    index: number;
    cardsLength: number;
    children: ReactNode;
}> = ({ theme, index, cardsLength, children }) => {
    return (
        <motion.div
            className={`${theme.display} justify-center items-center w-full relative ${theme.color}`}
            style={{
                display: `${theme.display}`,
                zIndex: cardsLength - index,
            }}
            initial={index % 2 === 0 ? hideOnBottm : hideOnTop}
            animate={index % 2 === 0 ? showBottomUp : showTopDown}
            transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: 'easeInOut',
            }}
        >
            {children}
        </motion.div>
    );
};

export { Card };
