import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import NavItems from "./ui/navItems";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => (
  <div className="flex items-center gap-2 md:hidden">
    <ThemeToggle />
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <nav className="flex flex-col gap-6 mt-12">
          <NavItems className="flex-col gap-6" linkClassName="text-lg" />
          <Button asChild className="mt-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
);

export default MobileNav;
