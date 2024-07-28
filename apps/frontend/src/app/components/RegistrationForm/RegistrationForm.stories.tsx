import type { Meta, StoryObj } from '@storybook/react';
import RegistrationForm from "./RegistrationForm";

const meta = {
    title: 'frontend/app/component/RegistrationForm',
    component: RegistrationForm,
    tags: ['autodocs'],
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const _RegistrationForm = () => { <RegistrationForm /> }


