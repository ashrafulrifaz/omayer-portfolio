import FacebookIcon from '@/assets/facebook.png'
import YoutubeIcon from "@/assets/youtube.png"
import XIcon from "@/assets/x.png"
import InstagramIcon from '@/assets/instagram.png'
import Image from 'next/image';
import Link from 'next/link';

const Social = () => {
    return (
        <div className='social'>
            <Link href={'https://www.facebook.com/mdomayer2002'} className='social_icon' target='_blank'>
                <Image src={FacebookIcon} alt='facebook' />
            </Link>
            <Link href={'https://x.com/ehasanul2002'} className='social_icon' target='_blank'>
                <Image src={XIcon} alt='facebook' target='_blank' />
            </Link>
            <Link href={'https://www.instagram.com/mdomayer2002/'} className='social_icon' target='_blank'>
                <Image src={InstagramIcon} alt='facebook' target='_blank' />
            </Link>
            <Link href={'https://www.youtube.com/@ehasanul-islam'} className='social_icon' target='_blank'>
                <Image src={YoutubeIcon} alt='facebook' target='_blank' />
            </Link>
        </div>
    );
};

export default Social;