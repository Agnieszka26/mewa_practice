'use client'
import { montserrat } from '../../fonts/index';
import { Routes } from '../../routes';
import { LinkMenu } from '../LinkMenu/LinkMenu';

export const Menu = () => {
  return (
    <nav className={`${montserrat.className}  text-white bg-slate-800 border-b-slate-800`}>
      <ul className="flex container ">
        <LinkMenu href={Routes.ABOUT} label={'about'} />
        <LinkMenu href={Routes.JOB_OFFERS} label={'job offers'} />
        <LinkMenu href={Routes.REVIEWS} label={'reviews'} />
        <LinkMenu href={Routes.CONTACT} label={'contact'} />
        <LinkMenu href={Routes.DASHBOARD} label={'dashboard'} />
      </ul>
    </nav>
  );
};
