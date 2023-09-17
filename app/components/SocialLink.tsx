import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const SocialLink: FC<{
    linkURL: string;
    iconURL: string;
    iconName: string;
    isExternalLink?: boolean;
}> = ({ linkURL, iconURL, iconName, isExternalLink = false }) => {
    return (
        <Link target={isExternalLink ? '_blank' : '_self'} href={linkURL}>
            <Image
                src={iconURL}
                alt={iconName}
                width={'32px'}
                height={'32px'}
                _hover={{ opacity: 0.6 }}
            />
        </Link>
    );
};

export { SocialLink };
