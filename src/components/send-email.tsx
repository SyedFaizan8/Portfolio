'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

// Zod validation schema
const emailFormSchema = z.object({
    fullname: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    description: z.string().min(1, 'Description is required'),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function EmailForm() {
    const [status, setStatus] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailFormData>({
        resolver: zodResolver(emailFormSchema),
    });

    const sendEmail = async (data: EmailFormData) => {
        setStatus('Sending...');
        try {
            const response = await axios.post('/api/send-email', {
                to: data.email,
                subject: `Message from ${data.fullname}`,
                text: data.description,
            });

            if (response.status === 200) {
                setStatus('Email sent successfully!');
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send email');
        }
    };

    return (
        <form className="my-2" onSubmit={handleSubmit(sendEmail)}>
            <div className="gap-4 md:grid md:grid-cols-2">
                <div className="mb-4">
                    <label htmlFor="fullname" className="block text-sm font-medium">
                        Full name
                    </label>
                    <input
                        id="fullname"
                        placeholder="Full name"
                        type="text"
                        {...register('fullname')}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        id="email"
                        placeholder="example@gmail.com"
                        type="email"
                        {...register('email')}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-8 md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Description"
                        {...register('description')}
                        className="w-full p-2 border rounded-md h-28"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">{errors.description.message}</p>
                    )}
                </div>
            </div>

            <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
            >
                Send &rarr;
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
            </button>

            {status && <p className="mt-4 text-center">{status}</p>}

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
    );
}
