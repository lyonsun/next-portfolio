'use client';

import { FC } from 'react';
import { SocialLink } from './components/SocialLink';
import { Headline } from './components/Headline';
import { LinkedInIcon } from './components/icons/linkedin';
import { GitHubIcon } from './components/icons/github';
import { EmailIcon } from './components/icons/email';

const Home: FC = () => (
    <div className="relative bg-zinc-900 text-zinc-100 overflow-hidden">
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
            <div className="text-6xl">👨🏻‍💻</div>
            <Headline />
            <div className="flex justify-center items-center gap-4 mt-8">
                <a href="https://www.linkedin.com/in/lyonsun7" target="_blank">
                    <LinkedInIcon
                        className="w-8 h-8 hover:scale-110 transition-all"
                        fill="#f0f0f0"
                    />
                </a>
                <a href="https://github.com/lyonsun" target="_blank">
                    <GitHubIcon
                        className="w-8 h-8 hover:scale-110 transition-all"
                        fill="#f0f0f0"
                    />
                </a>
                <a href="mailto:sunly917@gmail.com">
                    <EmailIcon
                        className="w-8 h-8 hover:scale-110 transition-all"
                        fill="#f0f0f0"
                    />
                </a>
            </div>
        </div>
    </div>
);

export default Home;
