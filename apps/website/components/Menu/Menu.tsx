'use client'
import { montserrat } from 'apps/website/app/fonts';
import { LinkMenu } from '../LinkMenu/LinkMenu';

export const Menu = () => {



  return (
    <nav className={`${montserrat.className}  text-white bg-slate-800 border-b-slate-800`}>
      <ul className="flex container ">
        <LinkMenu href={"/about"} label={'about'} />
        <LinkMenu href={"/job-offers"} label={'job offers'} />
        <LinkMenu href={"/reviews"} label={'reviews'} />
        <LinkMenu href={"/contact"} label={'contact'} />
        <LinkMenu href={"/dashboard"} label={'dashboard'} />
      </ul>
    </nav>
  );
};
