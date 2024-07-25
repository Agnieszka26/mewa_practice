import type { Meta, StoryObj } from '@storybook/react';
import { handlers } from "../../../mocks/handlers";
import EmployeesPage from "../EmployeesPage";

const meta = {
    title: 'frontend/pages/EmployeesPage',
    component: EmployeesPage,
} satisfies Meta<typeof EmployeesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const _EmployeesPage = () => { <EmployeesPage /> }

_EmployeesPage.parameters = {
    msw: {
        handlers,
    },

}
