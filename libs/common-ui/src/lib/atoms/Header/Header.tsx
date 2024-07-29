import { ComponentProps } from 'react'

type Props = ComponentProps<'h1'> & {
    children: string | undefined
}

export const Header = ({ children }: Props) => {
    return (
        <h1 className='text-3xl font-bold my-2'>{children}</h1>
    )
}

