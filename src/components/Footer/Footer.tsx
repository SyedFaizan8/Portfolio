import React from 'react';
import dynamic from 'next/dynamic';
import useIsMobile from '@/components/Hooks/useIsMobile';

const MobileComponent = dynamic(() => import('./MobileBg'));
const DesktopComponent = dynamic(() => import('./WavyBgFooter'));

const Footer: React.FC = () => {

    const isMobile = useIsMobile();

    return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

export default Footer;
