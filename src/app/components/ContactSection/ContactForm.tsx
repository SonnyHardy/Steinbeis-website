'use client';

import React, { useState } from 'react';
import { Button } from '../UI';
import { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Vorname ist erforderlich';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nachname ist erforderlich';
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
        firstName: '',
        lastName: '',
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
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-[var(--shadow-card)] space-y-6">
      <div className="text-center mb-8">
        <h3 className="font-red-hat font-bold text-2xl text-[var(--text-primary)] mb-2">
          Kontaktieren Sie uns
        </h3>
        <p className="font-albert-sans text-[var(--text-muted)]">
          Lassen Sie uns über Ihr Projekt sprechen
        </p>
      </div>

      {/* Name Felder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block font-albert-sans font-medium text-[var(--text-primary)] mb-2">
            Vorname *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-albert-sans transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] ${
              errors.firstName ? 'border-red-300 bg-red-50' : 'border-[var(--border-light)] bg-white'
            }`}
            placeholder="Max"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block font-albert-sans font-medium text-[var(--text-primary)] mb-2">
            Nachname *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-albert-sans transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] ${
              errors.lastName ? 'border-red-300 bg-red-50' : 'border-[var(--border-light)] bg-white'
            }`}
            placeholder="Mustermann"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label htmlFor="email" className="block font-albert-sans font-medium text-[var(--text-primary)] mb-2">
          E-Mail Adresse *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg font-albert-sans transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-[var(--border-light)] bg-white'
          }`}
          placeholder="max.mustermann@email.de"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.email}</p>
        )}
      </div>

      {/* Betreff */}
      <div>
        <label htmlFor="subject" className="block font-albert-sans font-medium text-[var(--text-primary)] mb-2">
          Betreff
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg font-albert-sans bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          placeholder="Ihr Anliegen in Kürze"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="message" className="block font-albert-sans font-medium text-[var(--text-primary)] mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg font-albert-sans transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-vertical ${
            errors.message ? 'border-red-300 bg-red-50' : 'border-[var(--border-light)] bg-white'
          }`}
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 font-albert-sans">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </>
          ) : (
            <>
              Senden
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </Button>
      </div>

      {/* Hinweis */}
      <div className="pt-4 border-t border-[var(--border-light)]">
        <p className="font-albert-sans text-xs text-[var(--text-muted)] text-center">
          * Pflichtfelder | Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
        </p>
      </div>
    </form>
  );
}