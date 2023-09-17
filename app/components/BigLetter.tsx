import { Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

const BigLetter: FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <Text fontSize="9xl" fontWeight="bold">
            {children}
        </Text>
    );
};

export { BigLetter };
