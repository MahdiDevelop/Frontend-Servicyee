import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/check_email/`;

interface CheckEmailResponse {
  exists: boolean;
  message?: string;
}

export const useCheckEmail = () => {
  return useMutation<CheckEmailResponse, Error, { email: string }>({
    mutationFn: async ({ email }) => {
      const res = await axios.post(API_URL, { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    },
  });
};
