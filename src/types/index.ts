// global types for Steinbeis
export interface ServiceData {
  id: string;
  title: string;
  description: string;
}

export interface StatData {
  id: string;
  number: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ImageTextModuleProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  backgroundColor?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export interface StatCardProps {
  number: string;
  label: string;
  backgroundColor?: string;
}