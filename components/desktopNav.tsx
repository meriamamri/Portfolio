import NavItems from "@/components/ui/navItems";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavItems
        className="gap-6"
        linkClassName="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary after:w-0 hover:after:w-full after:transition-all"
      />
      <ThemeToggle />
      <Button asChild>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </Button>
    </nav>
  );
};

export default DesktopNav;
