"use client";

import { RiYoutubeFill, RiGithubFill, RiFacebookBoxFill } from 'react-icons/ri'

import Link from 'next/link';

const icons = [
    {
        path: '/',
        name: <RiYoutubeFill />,
    },
    {
        path: 'https://github.com/LeKhoaDev',
        name: <RiGithubFill />,
    },
    {
        path: '/',
        name: <RiFacebookBoxFill />,
    },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
