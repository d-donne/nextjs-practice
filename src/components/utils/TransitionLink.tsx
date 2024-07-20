'use client'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

interface Props extends LinkProps  {
  children: React.ReactNode
  href: string
 className?: string
}

function sleep (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))

}


const TransitionLink = ({children, href, className,  ...props} : Props) => {
  
  const router = useRouter();
  const body = document.querySelector('body');

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    body?.classList.add('transitionPage');
    await sleep(200);
    router.push(href);
    await sleep(200);
    body?.classList.remove('transitionPage');


  };

  return (
    <Link
    href={href}
    className={className}
    {...props}
    
    onClick={handleClick}
    >
      {children}
    </Link>
  )
}

export default TransitionLink