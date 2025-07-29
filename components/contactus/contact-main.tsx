'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import Typography from '../shared/typography'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/contact-input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/contact-select';
import { Textarea } from '../ui/contact-textarea';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const inquiries = ["General Information", "Volunteer Opportunities", "Donation Inquiry", "Partnership", "Media Inquiry", "Program Information", "Other"]

const ContactusMain = () => {
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            type_of_aid: "",
            contact_info: "",
            description: "",
        },
    });
  return (
    <div className='w-full sm:py-12 xs:py-8 py-3'>
        <section 
            className='work-sans max-container 2xl:w-[80%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between xl:gap-12 gap-6'
        >
            <Card className='flex-1 border-gray-200 bg-white'>
                <CardHeader className='xl:pb-10 lg:pb-2 sm:pb-10 pb-6 flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <Typography
                            typo="header-4-semibold"
                            className='!font-bold'
                        >
                            Get in-<span className='text-[#DB2777]'>Touch</span>
                        </Typography>
                        <Typography
                            className='text-gray-500'
                        >
                            Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </Typography>
                    </div>
                    <div className='border-b border-gray-300'></div>
                </CardHeader>
                <CardContent className='pb-0'>
                    <Form {...form}>
                        <form className='flex flex-col lg:gap-6 sm:gap-10 gap-8'>
                            <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel>Full name</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-4 text-gray-500 rounded-[0.5rem] border-gray-300" placeholder="Enter your full name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem
                                            className='sm:flex-1 w-full flex flex-col gap-0'
                                        >
                                        <FormLabel>Email Address </FormLabel>
                                        <FormControl className=" ">
                                            <Input className="!py-4 text-gray-500 border-gray-300 rounded-[0.5rem]" placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel>Phone number</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-4 text-gray-500 rounded-[0.5rem] border-gray-300" placeholder="Enter your full name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form?.control}
                                    name="type_of_aid"
                                    render={({ field }) => (
                                        <FormItem
                                            className='sm:flex-1 w-full flex flex-col gap-0'
                                        >
                                            <FormLabel>Type of Aid</FormLabel>
                                            <Select
                                                value={field.value}
                                                onValueChange={(value) => field.onChange(value)}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-full rounded-[0.5rem] border-gray-300 !text-gray-600">
                                                        <SelectValue placeholder="Select your aid type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="!py-2 text-gray-800 border-gray-500 rounded-[0.5rem] bg-white">
                                                    <SelectGroup
                                                        className=""
                                                    >
                                                        <SelectLabel>Products</SelectLabel>
                                                        {inquiries.map((inquiry) => (
                                                            <SelectItem
                                                                key={inquiry} 
                                                                value={inquiry}
                                                            >
                                                                {inquiry}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form?.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col gap-0'>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl className="py-">
                                            <div className='border-b rounded-xl border-gray-300'>
                                                <Textarea
                                                    className="!py-4 text-gray-500 rounded-[0.5rem] border-none" 
                                                    placeholder="Type your message here" 
                                                    {...field} 
                                                    rows={5}
                                                />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                variant="primary"
                                className='py-6 text-lg !rounded-[0.6rem]'
                            >
                                Send message
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className='xl:pt-8 lg:pt-4 pt-6 flex items-center gap-6'>
                    <Typography
                        typo="header-6-semibold"
                    >
                        Follow us: 
                    </Typography>
                    <div className='flex items-center gap-3'>
                        <Link
                            href="https://www.facebook.com/FaBBFoundation/"
                            target="_blank"
                            className='p-2 rounded-full bg-app-primary'
                        >
                            <Facebook color='#fff' size={18} />
                        </Link>
                        <Link
                            href="https://x.com/fabbfoundation"
                            target="_blank"
                            className='p-2 rounded-full bg-app-primary'
                        >
                            <Twitter color='#fff' size={18}  />
                        </Link>
                        <Link
                            href="https://www.instagram.com/fabbfoundation/"
                            target="_blank"
                            className='p-2 rounded-full bg-app-primary'
                        >
                            <Instagram color='#fff' size={18} />
                        </Link>
                    </div>
                </CardFooter>
            </Card>
           <div className='flex-1 flex flex-col lg:gap-3 sm:gap-8 gap-4'>
            <Card className='w-full border-gray-200 bg-white'>
                <CardHeader>
                    <Typography
                        typo="header-5-semibold"
                        className=''
                    >
                        Find us
                    </Typography>
                    <Typography
                        className='text-gray-500'
                    >
                        Our main office location in Banjul
                    </Typography>
                </CardHeader>
                <CardContent
                    className='w-full sm:h-[350px] h-[250px] px-6 overflow-hidden rounded-[1rem]'
                >
                    <iframe
                        title="Banjul Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737.91868724923!2d-16.5816!3d13.4549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec2b2bb4b0e356b%3A0xe3cf107b1b4b1dcb!2sIndependence%20Drive%2C%20Banjul%2C%20The%20Gambia!5e0!3m2!1sen!2sgm!4v1718989646940!5m2!1sen!2sgm"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "0.5rem" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </CardContent>
            </Card> 
            <Card className='w-full lg:p-0 sm:p-3 border-red-500 bg-red-50 text-red-700'>
                <CardHeader className='py-3 flex flex-col'>
                    <Typography
                        typo="header-5-semibold"
                        className='!font-bold !leading-none'
                    >
                        Emergency Contact
                    </Typography>
                    <Typography>
                        For urgent matters outside office hours
                    </Typography>
                </CardHeader>
                <CardContent className='flex flex-col gap-2'>
                    <Typography
                        typo="body-large-medium"
                        className='!leading-none'
                    >
                        Emergency Hotline: +220 987 6543
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='!leading-none'
                    >
                        Available 24/7 for urgent health emergencies
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='!leading-none'
                    >
                        Email: emergency@fabbfoundation.gm
                    </Typography>
                </CardContent>
            </Card>
           </div>
        </section>
    </div>
  )
}

export default ContactusMain