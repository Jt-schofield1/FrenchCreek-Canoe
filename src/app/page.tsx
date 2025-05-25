'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/site');
  }, [router]);
  
  return (
    <div className="h-screen w-full flex items-center justify-center bg-cream-50">
      <p className="text-xl font-light">Redirecting to French Creek Trading Post...</p>
    </div>
  );
}
