import { classMerge } from '@ems/common-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    label: string;

}

export const LinkMenu = ({ href, label,  }: Props) => {
    const pathname = usePathname();
    const buildCssClass = (path: string) => classMerge('text-lg text-white', { 'text-red-400': path === pathname })

    return (
        <li className="mr-6">
            <Link href={href} className={buildCssClass(href)}>
                {label}
            </Link>
        </li>
    )
}
