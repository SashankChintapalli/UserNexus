import { Edit2 } from 'lucide-react';
import { User, WorkExperience } from '@/types/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ExperienceTabProps {
  user: User;
  isEditing: boolean;
  onEdit: () => void;
  onChange: (user: User) => void;
}

const ExperienceTab = ({ user, isEditing, onEdit, onChange }: ExperienceTabProps) => {
  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: string) => {
    const newWorkExperience = [...user.workExperience];
    newWorkExperience[index] = { ...newWorkExperience[index], [field]: value };
    onChange({ ...user, workExperience: newWorkExperience });
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        {!isEditing && (
          <button
            onClick={onEdit}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <Edit2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="space-y-8">
        {user.workExperience.map((exp, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-2">
              <Label>Domain</Label>
              <Input
                placeholder="e.g. Technology"
                value={exp.domain}
                disabled={!isEditing}
                onChange={(e) => updateWorkExperience(index, 'domain', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Sub-domain</Label>
                <Input
                  placeholder="e.g. MERN Stack"
                  value={exp.subDomain}
                  disabled={!isEditing}
                  onChange={(e) => updateWorkExperience(index, 'subDomain', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Experience</Label>
                <Select
                  value={exp.experience}
                  disabled={!isEditing}
                  onValueChange={(value) => updateWorkExperience(index, 'experience', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1 years">0-1 years</SelectItem>
                    <SelectItem value="1-2 years">1-2 years</SelectItem>
                    <SelectItem value="2-3 years">2-3 years</SelectItem>
                    <SelectItem value="3-5 years">3-5 years</SelectItem>
                    <SelectItem value="5+ years">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
