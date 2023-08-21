import Link from 'next/link'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import {ShoppingCart, Menu} from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

const Header = () => {
  return (
    <div className='flex justify-between items-center px-6 py-8 wrapper'>
        <Link href={'/'}>
            <Image src={logo} alt='logo' className='w-40'/>
        </Link>
        <div className='hidden md:block'>
        <ul className='flex gap-x-4'>
            <li className='text-lg'>
                <Link href='/category/Female'>Female
                </Link>
                </li>
            <li className='text-lg'>
                <Link href='/category/Mens'>Mens
                </Link>
                </li>
            <li className='text-lg'>
                <Link href='/category/Kids'>Kids
                </Link>
                </li>
            <li className='text-lg'>
                <Link href='/products'>All Products
                </Link>
                </li>
        </ul>
        </div>
        <div className='hidden md:block'>
            <input className='border-2'placeholder='Search Term' type="text" />
        </div>
        <div className='flex gap-x-2'>
            <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
                <ShoppingCart className='h-6' />
            </div>
            {/* Mbile Nav */}
            <Sheet>
            <SheetTrigger>
                <Menu className='h-8 w-8' />
            </SheetTrigger>
            <SheetContent>
            <div className='md:block'>
            <ul className='flex gap-y-4 flex-col text-xl'>
                <li className='text-lg'>
                    <Link href='/category/Female'>Female
                    </Link>
                    </li>
                <li className='text-lg'>
                    <Link href='/category/Mens'>Mens
                    </Link>
                    </li>
                <li className='text-lg'>
                    <Link href='/category/Kids'>Kids
                    </Link>
                    </li>
                <li className='text-lg'>
                    <Link href='/products'>All Products
                    </Link>
                    </li>
            </ul>
            </div>
            </SheetContent>
            </Sheet>
            
        </div>
    </div>
  )
}

export default Header