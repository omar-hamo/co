"use client";

import React from "react";
import SkeletonBase, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  variant?: "text" | "circle" | "rect";
  width?: number | string;
  height?: number | string;
  className?: string;
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  width,
  height,
  className = "",
  count = 1,
}) => {
  return (
    <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
      <SkeletonBase
        circle={variant === "circle"}
        className={className}
        count={count}
        height={height}
        width={width}
      />
    </SkeletonTheme>
  );
};

// Predefined skeleton components for common use cases
export const CardSkeleton = () => (
  <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
    <Skeleton height={32} width="75%" className="mx-auto" />
    <Skeleton height={40} width="50%" className="mx-auto" />
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center space-x-3">
          <Skeleton variant="circle" width={24} height={24} />
          <Skeleton width="100%" height={16} />
        </div>
      ))}
    </div>
    <Skeleton height={48} width={160} className="mx-auto" />
  </div>
);

export const FormSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skeleton height={56} width="100%" />
      <Skeleton height={56} width="100%" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skeleton height={56} width="100%" />
      <Skeleton height={56} width="100%" />
    </div>
    <Skeleton height={120} width="100%" />
    <Skeleton height={48} width={200} className="mx-auto" />
  </div>
);

export const BannerSkeleton = () => (
  <div className="relative w-full h-[400px] bg-gray-100">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Skeleton height={48} width={300} />
        <Skeleton height={24} width={200} />
        <Skeleton height={32} width={250} />
      </div>
    </div>
  </div>
);

export default Skeleton;
