'use client';

import React, { useState } from 'react';
import { Button } from '../UI';
import { ContactFormData } from '@/types';
import {ArrowRight, Check, Loader} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vor- und Nachname sind erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Hier würde normalerweise der API-Call stattfinden
      // Für Demo-Zwecke simulieren wir eine Verzögerung
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Kontaktformular gesendet:', formData);
      setSubmitted(true);

      // Form zurücksetzen
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-[var(--shadow-card)] text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-red-hat font-bold text-xl text-[var(--text-primary)] mb-2">
          Vielen Dank für Ihre Nachricht!
        </h3>
        <p className="font-albert-sans text-[var(--text-muted)] mb-6">
          Wir werden uns in Kürze bei Ihnen melden.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="primary"
        >
          Neue Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] space-y-4">
      <div className="mb-4">
        <h3 className="font-red-hat font-bold text-3xl text-[var(--text-primary)] mb-2">
          Kontaktieren Sie uns
        </h3>
      </div>

      {/* Name Felder */}
        <div>
          <label htmlFor="name" className="block font-albert-sans font-medium text-black/50 mb-1">
            Vor- & Nachname
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-0 border-b-2 font-albert-sans transition-colors focus:outline-none focus:ring-0 focus:border-[var(--color-secondary)] ${
              errors.name ? 'border-b-red-300 bg-red-50' : 'border-b-[var(--border-light)] bg-white'
            }`}
            placeholder="Vorname Nachname"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.name}</p>
          )}
        </div>

      {/* E-Mail */}
      <div>
        <label htmlFor="email" className="block font-albert-sans font-medium text-black/50 mb-1">
          E-Mail Adresse
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-0 border-b-2 font-albert-sans transition-colors focus:outline-none focus:ring-0 focus:border-[var(--color-secondary)] ${
            errors.email ? 'border-b-red-300 bg-red-50' : 'border-b-[var(--border-light)] bg-white'
          }`}
          placeholder="name@gmail.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.email}</p>
        )}
      </div>

      {/* Betreff */}
      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border-0 border-b-2 border-b-[var(--border-light)] font-albert-sans bg-white transition-colors focus:outline-none focus:ring-0 focus:border-[var(--color-secondary)]"
          placeholder="Betreff"
        />
      </div>

      {/* Nachricht */}
      <div>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-0 border-b-2 font-albert-sans transition-colors focus:outline-none focus:ring-0 focus:border-[var(--color-secondary)] resize-vertical ${
            errors.message ? 'border-b-red-300 bg-red-50' : 'border-b-[var(--border-light)] bg-white'
          }`}
          placeholder="Nachricht"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className="w-full group"
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              Senden
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>

    </form>
  );
}