"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">{children}</ol>
    </nav>
  );
}

interface BreadcrumbItemProps {
  children: React.ReactNode;
  className?: string;
}

export function BreadcrumbItem({ children, className }: BreadcrumbItemProps) {
  return <li className={cn("flex items-center", className)}>{children}</li>;
}

interface BreadcrumbLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function BreadcrumbLink({
  href,
  children,
  className,
}: BreadcrumbLinkProps) {
  return (
    <Link
      href={href}
      className={cn("text-sm font-medium hover:text-gray-900", className)}
    >
      {children}
    </Link>
  );
}

interface BreadcrumbPageProps {
  children: React.ReactNode;
  className?: string;
}

export function BreadcrumbPage({ children, className }: BreadcrumbPageProps) {
  return (
    <span className={cn("flex items-center", className)}>
      <ChevronRight className="mr-2 h-4 w-4 text-gray-400" />
      <span className="text-sm font-medium text-gray-500">{children}</span>
    </span>
  );
}

interface BreadcrumbSeparatorProps {
  className?: string;
}

export function BreadcrumbSeparator({ className }: BreadcrumbSeparatorProps) {
  return <ChevronRight className={cn("h-4 w-4 text-gray-400", className)} />;
}
