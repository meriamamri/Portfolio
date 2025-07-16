"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface EducationFormProps {
  education?: Education | null;
  onClose: () => void;
  onSave: (education: Education) => void;
}

export default function EducationForm({ education, onClose, onSave }: EducationFormProps) {
  const [formData, setFormData] = useState({
    degree: education?.degree || '',
    institution: education?.institution || '',
    period: education?.period || '',
    description: education?.description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEducation: Education = {
      degree: formData.degree,
      institution: formData.institution,
      period: formData.period,
      description: formData.description,
    };

    onSave(newEducation);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{education ? 'Edit Education' : 'Add New Education'}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              placeholder="BSc in Computer Science"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="New York University"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="period">Period</Label>
            <Input
              id="period"
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              placeholder="2014 - 2018"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              placeholder="Additional details about your education..."
            />
          </div>
          
          <div className="flex gap-2">
            <Button type="submit">Save Education</Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}