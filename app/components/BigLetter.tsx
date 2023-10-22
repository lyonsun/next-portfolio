import { keyframes } from '@chakra-ui/react';

import { FC } from 'react';
import { MotionText } from './Motions';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  25% { transform: scale(1.5) rotate(0); }
  50% { transform: scale(1.5) rotate(270deg); }
  75% { transform: scale(1) rotate(270deg); }
  100% { transform: scale(1) rotate(0); }
`;

const animation = `${animationKeyframes} 2s ease-in-out 3s`;

const BigLetter: FC<{
    letter: string;
}> = ({ letter }) => {
    return (
        <MotionText
            overflow={'hidden'}
            fontSize="9xl"
            fontWeight="bold"
            width={'100%'}
            textAlign={'center'}
            userSelect={'none'}
            animation={animation}
        >
            {letter}
        </MotionText>
    );
};

export { BigLetter };
