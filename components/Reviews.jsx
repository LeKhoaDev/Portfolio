'use client'
import Image from "next/image"

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

//import swipper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules 
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
    {
        avatar: '././reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',

    },
    {
        avatar: '././reviews/avatar-2.png',
        name: 'Evelyn Anderson',
        job: 'Interior Designer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',
    },
    {
        avatar: '././reviews/avatar-3.png',
        name: 'John Doe',
        job: 'Game Dev',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',
    },
    {
        avatar: '././reviews/avatar-4.png',
        name: 'Emily Smith',
        job: 'Therapist',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',
    },
    {
        avatar: '././reviews/avatar-5.png',
        name: 'Oliver Taylor',
        job: 'Engineer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',
    },
    {
        avatar: '././reviews/avatar-6.png',
        name: 'Mason Wilson',
        job: 'Editor',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id augue sit amet felis blandit pulvinar.',
    },
]

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className="h-[350px]"
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className="flex items-center gap-x-4">
                                            {/* image */}
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt=""
                                                priority
                                            />
                                            {/* name */}
                                            <div className="flex flex-col">
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
