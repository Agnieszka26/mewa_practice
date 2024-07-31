import { Button, Header, Input } from '@ems/common-ui';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Routes } from '../../../../routes';
import { CreateReviewDto, createReviewSchema } from "../../../../types";
import { createReviewInAirtable } from "../services";
import { CreateForm } from './CreateForm';


const createReview = async (form: FormData) => {
    'use server'
    const review: CreateReviewDto = {
        content: form.get('content') as string,
        author: form.get("author") as string,
        points: form.get("points") as string
    }
    const result = createReviewSchema.safeParse(review)
    if (!result.success) {
        console.log('first', result.error.issues)
        return {
            status: 'error'
        }
    } else {

        return {
            status: 'success',
            payload: review
        }
    }

}

const CreateReviewPage = () => {
    const formAction = async (formData: FormData) => {
        'use server'
        const serverResults = await createReview(formData);
        if (serverResults.status === "success") {
            await createReviewInAirtable(serverResults.payload!);
            revalidatePath(Routes.REVIEWS)
            redirect(Routes.REVIEWS)
        }
    }

    return (
        <div>
            <Header>Create Review</Header>

           <p>form serverowy: </p>
            <form action={formAction}>
                <Input label={'content'} name={'content'} />
                <Input label={'author'} name={'author'} />
                <Input label={'points'} name={'points'} />
                <Button type='submit' label={'submit'} />
            </form>
            <p>form kliencki </p>
            <CreateForm />
        </div>
    )
}

export default CreateReviewPage
