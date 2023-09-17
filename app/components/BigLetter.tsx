import { Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  25% { transform: scale(1.5) rotate(0); }
  50% { transform: scale(1.5) rotate(270deg); }
  75% { transform: scale(1) rotate(270deg); }
  100% { transform: scale(1) rotate(0); }
`;

const animation = `${animationKeyframes} 2s ease-in-out 1s`;

const BigLetter: FC<{
    letter: string;
}> = ({ letter }) => {
    return (
        <Text
            overflow={'hidden'}
            fontSize="9xl"
            fontWeight="bold"
            width={'100%'}
            textAlign={'center'}
            userSelect={'none'}
            as={motion.p}
            animation={animation}
            whileHover={{
                scale: 1.5,
                rotate: '360deg',
                transitionDuration: '500ms',
                transitionTimingFunction: 'ease-out',
            }}
        >
            {letter}
        </Text>
    );
};

export { BigLetter };
