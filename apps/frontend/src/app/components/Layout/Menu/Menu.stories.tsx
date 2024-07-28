import type { Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ROUTE } from '../../../routes';
import { Menu } from "./Menu";
const meta = {
    title: 'frontend/pages/Menu',
    component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;


export const _Menu = () => {
 return   <MemoryRouter initialEntries={[ROUTE.ABOUT]}>
        <Routes>
            <Route path={ROUTE.ABOUT} element={<Menu />} />
            <Route path={ROUTE.HOME} element={<Menu />} />
        </Routes>
    </MemoryRouter>
}


