import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormValues>();

  const [createTest] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        alert('Test created successfully!');
        reset();
      }
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest, ...cache.readQuery({ query: GET_TESTS }).tests] }
      });
    },
  });

  const onSubmit: SubmitHandler<TestFormValues> = (data) => {
    setLoading(true);
    createTest({
      variables: {
        title: data.title,
        description: data.description,
      },
    })
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          {...register('title', { required: 'Title is required' })}
          type="text"
          placeholder="Test Title"
          className="w-full px-4 py-2 border rounded-lg focus:border-blue-500"
        />
        {errors.title && (
          <p role="alert" aria-live="assertive" className="mt-1 text-red-500">{errors.title.message}</p>
        )}

        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Test Description"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:border-blue-500"
        />
        {errors.description && (
          <p role="alert" aria-live="assertive" className="mt-1 text-red-500">{errors.description.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded-lg ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormValues>();

  const [createTest] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        alert('Test created successfully!');
        reset();
      }
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest, ...cache.readQuery({ query: GET_TESTS }).tests] }
      });
    },
  });

  const onSubmit: SubmitHandler<TestFormValues> = (data) => {
    setLoading(true);
    createTest({
      variables: {
        title: data.title,
        description: data.description,
      },
    })
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          {...register('title', { required: 'Title is required' })}
          type="text"
          placeholder="Test Title"
          className="w-full px-4 py-2 border rounded-lg focus:border-blue-500"
        />
        {errors.title && (
          <p role="alert" aria-live="assertive" className="mt-1 text-red-500">{errors.title.message}</p>
        )}

        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Test Description"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:border-blue-500"
        />
        {errors.description && (
          <p role="alert" aria-live="assertive" className="mt-1 text-red-500">{errors.description.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded-lg ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;