'use client';

import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Card } from './components/Card';
import { BigLetter } from './components/BigLetter';
import { SocialLink } from './components/SocialLink';
import { MotionFlex } from './components/Motions';

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
        <>
            <SimpleGrid columns={{ base: 2, lg: 3 }} height="100vh">
                <MotionFlex
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 5,
                    }}
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap="32px"
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: 'xl', lg: '2xl', xl: '4xl' }}
                    >
                        👨🏻‍💻 I am a&nbsp;
                        <Text as="span" color="purple.600">
                            web developer
                        </Text>
                    </Heading>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap="16px"
                    >
                        <SocialLink
                            linkURL="https://www.linkedin.com/in/lyonsun7"
                            iconURL="/images/linkedin.svg"
                            iconName="linkedin-profile"
                            isExternalLink
                        />
                        <SocialLink
                            linkURL="https://github.com/lyonsun"
                            iconURL="/images/github.svg"
                            iconName="github-profile"
                            isExternalLink
                        />
                        <SocialLink
                            linkURL="mailto:sunly917@gmail.com"
                            iconURL="/images/email.svg"
                            iconName="email-contact"
                        />
                    </Flex>
                </MotionFlex>

                {cards?.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            index={index}
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
            {/* <Marquee text="📍 Located in Espoo, Finland. ✌️ Developing both in frontend and backend. 🚀 Preferable with PHP, Golang, Ruby, Python and Javascript. ❤️ Love chess, reading, fishing, photographing, and many sports." /> */}
        </>
    );
}
