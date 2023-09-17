import { Box, Flex, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ComponentProps, FC, ReactNode } from 'react';

const slideTopDown = keyframes`
  0% { top: 100%; }
  100% { top: 0; }
`;

const slideBottomUp = keyframes`
  0% { bottom: 100%; }
  100% { bottom: 0; }
`;

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
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            width="100%"
            position={'relative'}
            bgColor={`${theme.color}.100`}
            _hover={{
                bgColor: `${theme.color}.200`,
            }}
            display={theme.display}
            as={motion.div}
            animation={`${
                index % 2 !== 0 ? slideTopDown : slideBottomUp
            } 1s ease-in-out 500ms`}
        >
            {children}
        </Flex>
    );
};

export { Card };
