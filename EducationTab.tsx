import { Edit2 } from 'lucide-react';
import { User } from '@/types/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EducationTabProps {
  user: User;
  isEditing: boolean;
  onEdit: () => void;
  onChange: (user: User) => void;
}

const EducationTab = ({ user, isEditing, onEdit, onChange }: EducationTabProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 2030 - currentYear + 1 }, (_, i) => currentYear + i);
  const pastYears = Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i);
  const allYears = [...pastYears, ...years].sort((a, b) => a - b);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Education Details</h2>
          {!isEditing && (
            <button
              onClick={onEdit}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/80"
            >
              <Edit2 className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>School / College</Label>
            <Input
              placeholder="e.g. Lincoln College"
              value={user.education.school}
              disabled={!isEditing}
              onChange={(e) =>
                onChange({
                  ...user,
                  education: { ...user.education, school: e.target.value },
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Highest degree or equivalent</Label>
            <Input
              placeholder="e.g. Bachelors in Technology"
              value={user.education.degree}
              disabled={!isEditing}
              onChange={(e) =>
                onChange({
                  ...user,
                  education: { ...user.education, degree: e.target.value },
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Course</Label>
            <Input
              placeholder="e.g. Computer science engineering"
              value={user.education.course}
              disabled={!isEditing}
              onChange={(e) =>
                onChange({
                  ...user,
                  education: { ...user.education, course: e.target.value },
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Year of completion</Label>
              <Select
                value={user.education.yearOfCompletion}
                disabled={!isEditing}
                onValueChange={(value) =>
                  onChange({
                    ...user,
                    education: { ...user.education, yearOfCompletion: value },
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {allYears.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Grade</Label>
              <Input
                placeholder="Enter here"
                value={user.education.grade}
                disabled={!isEditing}
                onChange={(e) =>
                  onChange({
                    ...user,
                    education: { ...user.education, grade: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Skills & Projects</h2>
          {!isEditing && (
            <button
              onClick={onEdit}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/80"
            >
              <Edit2 className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Skills</Label>
            <Input
              placeholder="Enter here"
              value={user.skills.skills}
              disabled={!isEditing}
              onChange={(e) =>
                onChange({
                  ...user,
                  skills: { ...user.skills, skills: e.target.value },
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Projects</Label>
            <Input
              placeholder="Enter here"
              value={user.skills.projects}
              disabled={!isEditing}
              onChange={(e) =>
                onChange({
                  ...user,
                  skills: { ...user.skills, projects: e.target.value },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
