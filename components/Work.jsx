'use client';
import Link from "next/link";
import { Button } from "./ui/button";

//import swipper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules 
import { Pagination } from 'swiper/modules'

// components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
    {
        image: '././work/h5.png',
        category: 'react js',
        name: 'Traveling Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/ReactJs-Traveling/tree/main/travelproject'
    },
    {
        image: '././work/h7.png',
        category: 'react js',
        name: 'Cinema Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/project-cinema'
    },
    {
        image: '././work/h4.png',
        category: 'react js',
        name: 'Clothes Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/React-ClotheShop/tree/main/frontend'
    },
    {
        image: '././work/h1.png',
        category: 'android',
        name: 'Food Booking App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Android-FoodApp'
    },
    {
        image: '././work/h2.png',
        category: 'android',
        name: 'Films App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Android-Film'
    },
    {
        image: '././work/h6.png',
        category: 'fullstack',
        name: 'Doctor Appointment Booking Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Doctor-Appointment-Booking'
    },
]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
                    <h2 className="section-title mb-4 mx-auto">Latest Projects</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet</p>
                    <Link href='/projects'><Button>All Projects</Button></Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px] " slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}>
                        {/* show only 4 projects */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work
