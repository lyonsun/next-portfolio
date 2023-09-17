import { Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const animationKeyframes = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const animation = `${animationKeyframes} 30s linear infinite`;

const Marquee: FC<{ text: string }> = ({ text }) => {
    return (
        <Text
            position={'absolute'}
            zIndex={'docked'}
            top="0"
            right="0"
            whiteSpace={'nowrap'}
            as={motion.p}
            animation={animation}
        >
            {text}
        </Text>
    );
};

export { Marquee };
