import React, { Suspense } from 'react';
import ApplicationForm from '@/components/sections/Careers/ApplicationForm';

export const metadata = {
  title: 'Apply Now | Mahraj Technologies',
  description: 'Submit your application to join the Mahraj Technologies team.',
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-primary text-xs uppercase font-bold animate-pulse">
            Loading Application Form...
          </div>
        </div>
      }>
        <ApplicationForm />
      </Suspense>
    </main>
  );
}
