import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to success page or handle as needed
      router.push('/success');
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-md">
      <h2 className="text-xl font-bold mb-6">Write a Testimonial</h2>
      {error && <p role="alert" aria-live="assertive" className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'This field is required' })}
            aria-invalid={errors.name ? true : false}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          <p id="error-name" role="alert" className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'This field is required' })}
            aria-invalid={errors.email ? true : false}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          <p id="error-email" role="alert" className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
            aria-invalid={errors.message ? true : false}
            aria-describedby={errors.message ? 'error-message' : undefined}
            rows={5}
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
          <p id="error-message" role="alert" className="text-red-600 text-sm mt-1">{errors.message?.message}</p>
        </div>

        <button type="submit" disabled={loading} className={`w-full p-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold rounded`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to success page or handle as needed
      router.push('/success');
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-md">
      <h2 className="text-xl font-bold mb-6">Write a Testimonial</h2>
      {error && <p role="alert" aria-live="assertive" className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'This field is required' })}
            aria-invalid={errors.name ? true : false}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          <p id="error-name" role="alert" className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'This field is required' })}
            aria-invalid={errors.email ? true : false}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          <p id="error-email" role="alert" className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
            aria-invalid={errors.message ? true : false}
            aria-describedby={errors.message ? 'error-message' : undefined}
            rows={5}
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
          <p id="error-message" role="alert" className="text-red-600 text-sm mt-1">{errors.message?.message}</p>
        </div>

        <button type="submit" disabled={loading} className={`w-full p-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold rounded`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;