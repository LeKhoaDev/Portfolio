'use client'
import React, { useState } from "react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
    {
        image: '/work/h5.png',
        category: 'react js',
        name: 'Traveling Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/ReactJs-Traveling/tree/main/travelproject'
    },
    {
        image: '/work/h7.png',
        category: 'react js',
        name: 'Cinema Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/project-cinema'
    },
    {
        image: '/work/h4.png',
        category: 'react js',
        name: 'Clothes Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/React-ClotheShop/tree/main/frontend'
    },
    {
        image: '/work/h1.png',
        category: 'android',
        name: 'Food Booking App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Android-FoodApp'
    },
    {
        image: '/work/h2.png',
        category: 'android',
        name: 'Films App',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Android-Film'
    },
    {
        image: '/work/h6.png',
        category: 'fullstack',
        name: 'Doctor Appointment Booking Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod imperdiet metus in aliquet.',
        link: '/',
        github: 'https://github.com/LeKhoaDev/Doctor-Appointment-Booking'
    },
]

/* remove category duplication */
const uniqueCategories = [
    'all projects', ...new Set(projectData.map((item) => item.category))
]

const page = () => {
    const [categories, setCAtegories] = useState(uniqueCategories)
    const [category, setCAtegory] = useState("all projects")

    const filteredProjects = projectData.filter(project => {
        // if category is 'all product' return all product
        return category === 'all projects' ? project : project.category === category
    })

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                {/* tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCAtegory(category)}
                                    value={category}
                                    key={index}
                                    className='capitalize w-[162px] md:w-auto'
                                >
                                    {category}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default page
