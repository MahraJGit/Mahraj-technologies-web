import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/admin', // Better than /studio often, but let's stick to /admin or check user preference
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'm9z3o7gu',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  
  schema,
  plugins: [structureTool()],
});
