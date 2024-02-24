'use client';

import { Card } from '../../components/Card';
import { BigLetter } from '../../components/BigLetter';
import { SocialLink } from '../../components/SocialLink';
import { motion } from 'framer-motion';

type CardProps = {
    letter: string;
    color: string;
    display: string;
};

const cards: CardProps[] = [
    { letter: 'L', color: 'bg-purple-200', display: 'flex' },
    { letter: 'I', color: 'bg-orange-200', display: 'flex' },
    { letter: 'A', color: 'bg-red-200', display: 'flex' },
    { letter: 'N', color: 'bg-green-200', display: 'flex' },
    { letter: 'G', color: 'bg-yellow-200', display: 'flex' },
    { letter: 'S', color: 'bg-teal-200', display: 'flex' },
    { letter: 'U', color: 'bg-blue-200', display: 'flex' },
    { letter: 'N', color: 'bg-pink-200', display: 'flex' },
    { letter: '❤️', color: 'bg-gray-200', display: 'flex lg:hidden' },
];

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 h-screen">
                <motion.div
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
                        delay: 2,
                    }}
                    className="flex flex-col justify-center items-center gap-8"
                >
                    <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold text-center font-sans">
                        👨🏻‍💻 I am a&nbsp;
                        <span className="text-purple-500">web developer</span>
                    </h1>
                    <div className="flex justify-center items-center gap-4">
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
                    </div>
                </motion.div>

                {cards?.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            index={index}
                            cardsLength={cards.length}
                            theme={{
                                color: card.color,
                                display: card.display,
                            }}
                        >
                            <BigLetter letter={card.letter} />
                        </Card>
                    );
                })}
            </div>
        </>
    );
}
