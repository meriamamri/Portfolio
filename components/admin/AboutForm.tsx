"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface AboutItem {
  id: string;
  description: string;
}

interface AboutFormProps {
  aboutItem?: AboutItem | null;
  onClose: () => void;
  onSave: (aboutItem: AboutItem) => void;
}

export default function AboutForm({ aboutItem, onClose, onSave }: AboutFormProps) {
  const [description, setDescription] = useState(aboutItem?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAboutItem: AboutItem = {
      id: aboutItem?.id || Date.now().toString(),
      description,
    };

    onSave(newAboutItem);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{aboutItem ? 'Edit About Paragraph' : 'Add New Paragraph'}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Write about yourself..."
              required
            />
          </div>
          
          <div className="flex gap-2">
            <Button type="submit">Save Paragraph</Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}