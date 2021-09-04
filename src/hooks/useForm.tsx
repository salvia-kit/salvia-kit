import React from 'react';
import cogoToast from 'cogo-toast';

export default function useForm() {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const handleClearError = React.useCallback(() => {
    setError(false);
  }, []);

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (value === '') {
        setError(true);
        setErrorMessage('Email required');
        return;
      }
      if (!value.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')) {
        setError(true);
        setErrorMessage('Email invalid');
        return;
      }

      setIsSubmitting(true);
      const res = await fetch('/api/campaign', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email: value }),
      });

      if (!res.ok) {
        setIsSubmitting(false);
        return cogoToast.info('You are already subscribed');
      }
      setIsSubmitting(false);
      setValue('');
      cogoToast.success('Thank you for your subscription');
      return;
    },
    [value],
  );

  return {
    value,
    error,
    isSubmitting,
    errorMessage,
    handleSubmit,
    handleClearError,
    handleInputChange,
  };
}
