'use client';

import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Card } from './components/Card';
import { BigLetter } from './components/BigLetter';

type CardProps = {
    letter: string;
    color: string;
    showOnlyOnMobile?: boolean;
};

const cards: CardProps[] = [
    { letter: 'L', color: 'purple' },
    { letter: 'I', color: 'orange' },
    { letter: 'A', color: 'red' },
    { letter: 'N', color: 'green' },
    { letter: 'G', color: 'yellow' },
    { letter: 'S', color: 'teal' },
    { letter: 'U', color: 'blue' },
    { letter: 'N', color: 'pink' },
    { letter: '❤️', color: 'gray', showOnlyOnMobile: true },
];

export default function Home() {
    return (
        <SimpleGrid columns={{ base: 2, lg: 3 }} height="100vh">
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', lg: '2xl', xl: '4xl' }}
                >
                    👨🏻‍💻 I am a web developer
                </Heading>
            </Flex>

            {cards?.map((card, index) => {
                return (
                    <Card
                        key={index}
                        theme={{
                            color: card.color,
                            display: {
                                base: 'flex',
                                lg: card.showOnlyOnMobile ? 'none' : 'flex',
                            },
                        }}
                    >
                        <BigLetter letter={card.letter} />
                    </Card>
                );
            })}
        </SimpleGrid>
    );
}
