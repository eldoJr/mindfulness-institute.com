import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { ContactInfo } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactInfo) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactInfo>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-semibold text-green-900 dark:text-green-100">
          Get in Touch
        </h3>
        <p className="text-green-700 dark:text-green-300">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-800 dark:text-green-200 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-800 text-green-900 dark:text-green-100
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-800 dark:text-green-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-800 text-green-900 dark:text-green-100
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-green-800 dark:text-green-200 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                         bg-white dark:bg-gray-800 text-green-900 dark:text-green-100
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>
          
          <Button type="submit" className="w-full flex items-center justify-center gap-2">
            <Send size={16} />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};