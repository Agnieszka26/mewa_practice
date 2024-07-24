import { clsx } from 'clsx'
import { FC, type ComponentProps } from 'react'
type Props = ComponentProps<'label'> & {
    children: string[]
}
const classesLabel = clsx(
    'px-4 py-1',)

export const Label: FC<Props> = ({ id, children }) => {
    return (
        <label htmlFor={id} className={classesLabel}>
            <span>
                {children}
            </span>
        </label>
    )
}

