import Link from 'next/link'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TwitterIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
    return (
        <div className='py-40'>
            {/* upper Footer */}
            <div className='flex wrapper py-20'>
                <ul className='px-20 flex-1'>
                    <li className='py-4'><Link href={'/'}>
                        <Image src={logo} alt='logo' className='w-54 h-10' />
                    </Link>
                    </li>
                    <li className='font-semibold py-5'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</li>
                    <li className='py-4'>
                        <ul className='flex'>
                            <li className='px-2'>
                                <Button className='bg-slate-200'><FacebookIcon className='fill-black h-10 w-6' /></Button></li>
                            <li className='px-2'>
                                <Button className='bg-slate-200'><TwitterIcon className='fill-black h-10 w-6' /></Button></li>
                            <li className='px-2'>
                                <Button className='bg-slate-200'><LinkedinIcon className='fill-black h-10 w-6' /></Button></li>
                        </ul>
                    </li>
                </ul>
                <ul className='flex-1'>
                    <li className='font-extrabold text-xl py-3'>Company</li>
                    <li className='py-2'><Link href={'/'}> About</Link></li>
                    <li className='py-2'><Link href={'/'}> Terms of use</Link></li>
                    <li className='py-2'><Link href={'/'}> Privacy Policy</Link></li>
                    <li className='py-2'><Link href={'/'}> How it works</Link></li>
                    <li className='py-2'><Link href={'/'}> Contacts</Link></li>
                </ul>
                <ul className='flex-1'>
                    <li className='font-extrabold text-xl py-3'>Support</li>
                    <li className='py-2'><Link href={'/'}>Support Carrer</Link></li>
                    <li className='py-2'><Link href={'/'}>24th Service</Link></li>
                    <li className='py-2'><Link href={'/'}>Quick Chat</Link></li>
                </ul>
                <ul className='flex-1'>
                    <li className='font-extrabold text-xl py-3'>Contact</li>
                    <li className='py-2'><Link href={'/'}>WhatsApp </Link></li>
                    <li className='py-2'><Link href={'/'}>Support24</Link></li>
                </ul>
            </div>
            <hr className='gap-x-6' />
            {/* copyright */}
            <div className='px-20 py-5'>
                <ul className='flex gap-x-10'>
                    <li className='px-20 text-lgs'>
                        Copyright © 2022 Dine Market
                        </li>
                    <li className='px-20'>Design by. <span className='text-lg font-bold'>Jumani Studio</span></li>
                    <li className='px-20'>Code by <span className='font-bold text-lg'> hassaan-jumani on github </span></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer