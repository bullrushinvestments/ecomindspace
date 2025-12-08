import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@emotion/react';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Technology',
      features: []
    }
  });

  const theme = useTheme();

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specifications', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to create business specification');
    }
    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Name is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="name"
            label="Business Name"
            autoComplete="business-name"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
            className={clsx({ 'border-red-500': !!errors.name })}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Business Description"
            autoComplete="business-description"
            error={!!errors.description}
            helperText={errors.description?.message}
            className={clsx({ 'border-red-500': !!errors.description })}
          />
        )}
      />

      <InputLabel htmlFor="industry">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{
          required: 'Industry is required',
        }}
        render={({ field }) => (
          <Select {...field} fullWidth margin="normal" id="industry">
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{
          required: 'At least one feature is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="features"
            label="Features (comma-separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
            className={clsx({ 'border-red-500': !!errors.features })}
          />
        )}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? (
          <>
            Creating Business Specification...
            <CircularProgress size={16} className="ml-2" />
          </>
        ) : 'Create'}
      </Button>

      {error && (
        <Typography variant="caption" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@emotion/react';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Technology',
      features: []
    }
  });

  const theme = useTheme();

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specifications', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to create business specification');
    }
    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Name is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="name"
            label="Business Name"
            autoComplete="business-name"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
            className={clsx({ 'border-red-500': !!errors.name })}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Business Description"
            autoComplete="business-description"
            error={!!errors.description}
            helperText={errors.description?.message}
            className={clsx({ 'border-red-500': !!errors.description })}
          />
        )}
      />

      <InputLabel htmlFor="industry">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{
          required: 'Industry is required',
        }}
        render={({ field }) => (
          <Select {...field} fullWidth margin="normal" id="industry">
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{
          required: 'At least one feature is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="features"
            label="Features (comma-separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
            className={clsx({ 'border-red-500': !!errors.features })}
          />
        )}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? (
          <>
            Creating Business Specification...
            <CircularProgress size={16} className="ml-2" />
          </>
        ) : 'Create'}
      </Button>

      {error && (
        <Typography variant="caption" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;