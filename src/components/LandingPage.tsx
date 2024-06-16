import React from 'react';
import { IconType } from 'react-icons';

const socialMedia: { icon: IconType, link: string }[] = [];

const SocialMediaIcon = ({ icon: Icon, link }: { icon: IconType, link: string }) => (
    <div className="text-gray-600 hover:text-highlight cursor-pointer">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon />
        </a>
    </div>
);

const LandingPage = () => (
    <section id="home" className="landing-page-section min-h-screen flex items-center md:pt-28 md:px-40 justify-center md:justify-start relative overflow-hidden">
        <div className="text-center md:text-left relative z-10">
            <h1 className="text-2xl font-bold leading-10 md:text-5xl md:leading-normal text-white">
                <span className="md:text-6xl text-5xl">Hi there!<br /></span>
                Welcome to <span className="text-highlight">C-VERSE</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
                Lorem ipsum dolor sit amet.
            </h4>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                {socialMedia.map((icon) => <SocialMediaIcon key={icon.link} {...icon} />)}
            </div>
        </div>
    </section>
);

export default LandingPage;