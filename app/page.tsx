'use client';

import { FC } from 'react';
import { SocialLink } from './components/SocialLink';
import { Headline } from './components/Headline';

const Home: FC = () => (
    <div className="relative bg-indigo-300 overflow-hidden">
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
            <div className="text-6xl">👨🏻‍💻</div>
            <Headline />
            <div className="flex justify-center items-center gap-4 mt-8">
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
        </div>
    </div>
);

export default Home;
