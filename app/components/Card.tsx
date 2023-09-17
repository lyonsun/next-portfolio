import { Box, Flex, Image } from '@chakra-ui/react';
import { ComponentProps, FC, ReactNode } from 'react';

type ThemeProps = ComponentProps<'div'> & {
    display?: {
        base: string;
        lg: string;
    };
};

const Card: FC<{
    theme: ThemeProps;
    children: ReactNode;
}> = ({ theme, children }) => {
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
            sx={{
                _hover: {
                    '>div': {
                        display: 'block',
                    },
                },
            }}
            display={theme.display}
        >
            {children}
        </Flex>
    );
};

export { Card };
