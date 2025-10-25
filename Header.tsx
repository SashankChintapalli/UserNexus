import { Headphones, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="border-2 border-foreground px-4 py-2">
          <div className="text-xl font-bold">UserNexus</div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground">
            <Headphones className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
