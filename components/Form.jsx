'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        // WYoGCIUm378iFuihP
        // template_sgpgane
        // service_es1vjp4

        emailjs.send(
            "service_es1vjp4",
            "template_sgpgane",
            {
                from_name: form.name,
                to_name: 'KhoaLe',
                from_email: form.email,
                to_email: 'lephamanhkhoa201203@gmail.com',
                message: form.message
            },
            'WYoGCIUm378iFuihP'
        )
            .then(() => {
                setLoading(false)
                alert('Thank you. I will get back to you asa soon as possible.')

                setForm({
                    name: "",
                    email: "",
                    message: ""
                })
            }, (error) => {
                setLoading(false)

                console.log(error)

                alert('Something went wrong.')
            })
    }

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            {/* input */}
            <div className="relative flex items-center">
                <Input type='name' id='name' name='name' placeholder='Your Name' value={form.name} onChange={handleChange} />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input type="email" id='email' name='email' placeholder='Your Email' value={form.email} onChange={handleChange} />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea name='message' placeholder='Type Your Message Here.' value={form.message} onChange={handleChange} />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk <ArrowRightIcon size={20} /></Button>
        </form>
    )
}

export default Form
