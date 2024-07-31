'use client'
import { Button, Input } from '@ems/common-ui';
import { zodResolver } from "@hookform/resolvers/zod";
import { Routes } from '../../../../routes';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateReviewDto, createReviewSchema } from '../../../../types';
import { createReviewClient } from './service';


export const CreateForm = () => {
    const [isError, setIsError] = useState(false);
    const { push, refresh } = useRouter();
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit, formState: { errors } } = useForm<CreateReviewDto>({
        resolver: zodResolver(createReviewSchema)
    })
    const clientAction: SubmitHandler<CreateReviewDto> = async (data: CreateReviewDto) => {
        const result = await createReviewClient(data)
        if (result.status === "error") {
            setIsError(true)
        } else {
            startTransition(() => push(Routes.REVIEWS))
            startTransition(() => refresh())
        }

    }

    return (
        <div> {isError && <p>oh no! error!</p> }
 {isPending && <p>loading ... </p> }
            <form onSubmit={handleSubmit(clientAction)}>

                <Input error={errors.content?.message} label={'content'} {...register("content")} />
                <Input error={errors.author?.message} label={'author'} {...register("author")} />
                <Input error={errors.points?.message} label={'points'} {...register("points")} />
                <Button type='submit' label={'submit'} />
            </form></div>
    )
}
