import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className='flex flex-row'>
            <div className='px-4 '>
                <Link href={"/"}>
                back to home
                </Link>

            </div>
            <div className='px-4 '>
                {children}
            </div>

        </div>
    )
}

export default DashboardLayout
