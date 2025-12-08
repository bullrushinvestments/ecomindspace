import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementStatusChange = async (requirementId: string, status: Requirement['status']) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`, { status });
      setRequirements(prevRequirements =>
        prevRequirements.map(req =>
          req.id === requirementId ? { ...req, status } : req
        )
      );
    } catch (err) {
      setError('Failed to update requirement status.');
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {requirements.map(requirement => (
        <div key={requirement.id} className="mb-2 p-2 border rounded shadow-md flex items-center justify-between">
          <div className="flex-grow">
            <p>{requirement.name}</p>
            <p className="text-gray-500">{requirement.description}</p>
          </div>
          <button
            onClick={() => handleRequirementStatusChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
            className={`px-2 py-1 rounded ${requirement.status === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            {requirement.status === 'pending' ? 'Pending' : 'Completed'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementStatusChange = async (requirementId: string, status: Requirement['status']) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`, { status });
      setRequirements(prevRequirements =>
        prevRequirements.map(req =>
          req.id === requirementId ? { ...req, status } : req
        )
      );
    } catch (err) {
      setError('Failed to update requirement status.');
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {requirements.map(requirement => (
        <div key={requirement.id} className="mb-2 p-2 border rounded shadow-md flex items-center justify-between">
          <div className="flex-grow">
            <p>{requirement.name}</p>
            <p className="text-gray-500">{requirement.description}</p>
          </div>
          <button
            onClick={() => handleRequirementStatusChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
            className={`px-2 py-1 rounded ${requirement.status === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            {requirement.status === 'pending' ? 'Pending' : 'Completed'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;