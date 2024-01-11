import { FC } from 'react';
import { motion } from 'framer-motion';

const BigLetter: FC<{
    letter: string;
}> = ({ letter }) => {
    return (
        <motion.div className="overflow-hidden text-9xl font-bold w-full text-center select-none">
            {letter}
        </motion.div>
    );
};

export { BigLetter };
