import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import { BackArrowIcon } from './Icons'
const font = Lilita_One({ weight: '400', subsets: ['latin'] })

export function CMSNavbar() {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
      <Link href='/'>
        <BackArrowIcon />
      </Link>
      <Link href='/'>
        <div className={`${font.className} text-3xl dark:text-amber-50`}>
          <span className='text-slate-600 dark:text-white'>er.</span>
          <span className='text-purple-500'>Turismo</span>
        </div>
      </Link>
    </div>
  )
}
