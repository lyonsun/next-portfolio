import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { MotionLink } from './Motions';

const SocialLink: FC<{
    linkURL: string;
    iconURL: string;
    iconName: string;
    isExternalLink?: boolean;
}> = ({ linkURL, iconURL, iconName, isExternalLink = false }) => {
    return (
        <MotionLink
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            target={isExternalLink ? '_blank' : '_self'}
            href={linkURL}
        >
            <Image
                src={iconURL}
                alt={iconName}
                width={'32px'}
                height={'32px'}
            />
        </MotionLink>
    );
};

export { SocialLink };
