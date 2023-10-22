import { ComponentProps, FC, ReactNode } from 'react';
import { MotionFlex } from './Motions';

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
    display?: {
        base: string;
        lg: string;
    };
};

const Card: FC<{
    theme: ThemeProps;
    index: number;
    children: ReactNode;
}> = ({ theme, index, children }) => {
    return (
        <MotionFlex
            justifyContent={'center'}
            alignItems={'center'}
            width="100%"
            position={'relative'}
            bgColor={`${theme.color}.100`}
            _hover={{
                bgColor: `${theme.color}.200`,
            }}
            display={theme.display}
            initial={index % 2 === 0 ? hideOnBottm : hideOnTop}
            animate={index % 2 === 0 ? showBottomUp : showTopDown}
            transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: 'easeInOut',
            }}
            zIndex={-index}
        >
            {children}
        </MotionFlex>
    );
};

export { Card };
