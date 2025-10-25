import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUsers } from '@/contexts/UserContext';
import { User } from '@/types/user';

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddUserDialog = ({ open, onOpenChange }: AddUserDialogProps) => {
  const { addUser } = useUsers();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.contact) return;

    const nameParts = formData.name.split(' ');
    const newUser: User = {
      id: Date.now().toString(),
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      email: formData.email,
      contact: formData.contact,
      yearOfBirth: '',
      gender: '',
      phoneNumber: formData.contact,
      phoneCountryCode: '+91',
      alternatePhone: '',
      address: '',
      pincode: '',
      domicileState: '',
      domicileCountry: '',
      education: {
        school: '',
        degree: '',
        course: '',
        yearOfCompletion: '',
        grade: '',
      },
      skills: {
        skills: '',
        projects: '',
      },
      workExperience: [
        {
          domain: '',
          subDomain: '',
          experience: '',
        },
      ],
    };

    addUser(newUser);
    setFormData({ name: '', email: '', contact: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name of the user</Label>
            <Input
              id="name"
              placeholder="Type here"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Type here"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                placeholder="Type here"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
