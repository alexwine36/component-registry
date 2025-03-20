import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      // SAMPLE_API_KEY: z.string().optional(),
    }, // Add your server keys here
    client: {
      NEXT_PUBLIC_BASE_URL: z.string().default('http://localhost:3000'),
    }, // Add your client keys here
    runtimeEnv: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      // SAMPLE_API_KEY: process.env.SAMPLE_API_KEY,
    }, // Add your runtime keys here
  });
