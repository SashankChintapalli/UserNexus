import { Edit2 } from 'lucide-react';
import { User } from '@/types/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/data/countries';

interface BasicInfoTabProps {
  user: User;
  isEditing: boolean;
  onEdit: () => void;
  onChange: (user: User) => void;
}

const BasicInfoTab = ({ user, isEditing, onEdit, onChange }: BasicInfoTabProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Basic Details</h2>
        {!isEditing && (
          <button
            onClick={onEdit}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <Edit2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label>First name</Label>
          <Input
            placeholder="e.g. John"
            value={user.firstName}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Last name</Label>
          <Input
            placeholder="e.g. Doe"
            value={user.lastName}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Email ID</Label>
          <Input
            placeholder="e.g. mrnobody@mail.com"
            value={user.email}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Year of birth</Label>
          <Select
            value={user.yearOfBirth}
            disabled={!isEditing}
            onValueChange={(value) => onChange({ ...user, yearOfBirth: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="YYYY" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Gender</Label>
          <Select
            value={user.gender}
            disabled={!isEditing}
            onValueChange={(value) => onChange({ ...user, gender: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Phone number</Label>
          <div className="flex gap-2">
            <Select
              value={user.phoneCountryCode}
              disabled={!isEditing}
              onValueChange={(value) => onChange({ ...user, phoneCountryCode: value })}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="8332883854"
              value={user.phoneNumber}
              disabled={!isEditing}
              onChange={(e) => onChange({ ...user, phoneNumber: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Alternate Phone no</Label>
          <Input
            placeholder="e.g. 9876543210"
            value={user.alternatePhone}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, alternatePhone: e.target.value })}
          />
        </div>

        <div className="col-span-2 space-y-2">
          <Label>Address</Label>
          <Input
            placeholder="Enter here"
            value={user.address}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, address: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Pincode</Label>
          <Input
            placeholder="Enter here"
            value={user.pincode}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, pincode: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Domicile state</Label>
          <Input
            placeholder="Enter state"
            value={user.domicileState}
            disabled={!isEditing}
            onChange={(e) => onChange({ ...user, domicileState: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Domicile country</Label>
          <Select
            value={user.domicileCountry}
            disabled={!isEditing}
            onValueChange={(value) => onChange({ ...user, domicileCountry: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.name} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoTab;
