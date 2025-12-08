import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = handleSubmit(async data => {
    try {
      await axios.post('/api/requirements', { ...data });
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    }
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Requirement Name"
          {...register('requirementName')}
          aria-label="Enter requirement name"
          required
          className="border p-2 rounded focus:outline-none w-full"
        />
        <textarea
          placeholder="Requirement Description"
          {...register('requirementDescription')}
          aria-label="Enter requirement description"
          required
          className="border p-2 rounded focus:outline-none w-full h-36 resize-y"
        />
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Requirements List</h2>
        <ul role="listbox" aria-label="List of requirements">
          {requirements.map(requirement => (
            <li key={requirement.id} className="border p-4 mb-2 rounded">
              <div className="flex justify-between items-center">
                <span>{requirement.name}</span>
                <button
                  onClick={() => router.push(`/edit/${requirement.id}`)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="mt-2">{requirement.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {error && (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mt-4">
          <strong className="font-bold">Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = handleSubmit(async data => {
    try {
      await axios.post('/api/requirements', { ...data });
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    }
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Requirement Name"
          {...register('requirementName')}
          aria-label="Enter requirement name"
          required
          className="border p-2 rounded focus:outline-none w-full"
        />
        <textarea
          placeholder="Requirement Description"
          {...register('requirementDescription')}
          aria-label="Enter requirement description"
          required
          className="border p-2 rounded focus:outline-none w-full h-36 resize-y"
        />
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Requirements List</h2>
        <ul role="listbox" aria-label="List of requirements">
          {requirements.map(requirement => (
            <li key={requirement.id} className="border p-4 mb-2 rounded">
              <div className="flex justify-between items-center">
                <span>{requirement.name}</span>
                <button
                  onClick={() => router.push(`/edit/${requirement.id}`)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="mt-2">{requirement.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {error && (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mt-4">
          <strong className="font-bold">Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default GatherRequirements;