"use client";
import React from 'react';
import BottomNav from '@/components/mobile/BottomNav';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {children}
      <BottomNav />
    </div>
  );
}
