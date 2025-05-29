import { cn } from "@/lib/utils";

interface NavItemsProps {
  className: string;
  linkClassName: string;
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const NavItems = ({ className, linkClassName }: NavItemsProps) => {
  return (
    <ul className={cn("flex", className)}>
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              "font-medium hover:text-primary/80 transition-colors",
              linkClassName
            )}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
