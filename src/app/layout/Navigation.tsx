import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Supply Chain Management",
    href: "/#solutions",
    description: "End-to-end supply chain visibility and control.",
  },
  {
    title: "Freight Forwarding",
    href: "/#solutions",
    description: "Global freight forwarding services and logistics.",
  },
  {
    title: "Customs Clearance",
    href: "/#solutions",
    description: "Streamlined customs clearance and compliance.",
  },
  {
    title: "Warehouse Management",
    href: "/#solutions",
    description: "Efficient warehouse operations and inventory control.",
  },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-[#141c2c]">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">GCCI</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-white/80">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/#platform">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80`}
                >
                  Platform
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/#contact">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className="bg-white text-[#141c2c] hover:bg-white/90"
              asChild
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-white/80 hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#141c2c] text-white border-l-white/20"
            >
              <div className="grid gap-4 py-4">
                <Link
                  to="/"
                  className="block px-2 py-1 text-lg text-white hover:text-white/80"
                >
                  Home
                </Link>
                <Link
                  to="/#solutions"
                  className="block px-2 py-1 text-lg text-white hover:text-white/80"
                >
                  Solutions
                </Link>
                <Link
                  to="/#platform"
                  className="block px-2 py-1 text-lg text-white hover:text-white/80"
                >
                  Platform
                </Link>
                <Link
                  to="/#contact"
                  className="block px-2 py-1 text-lg text-white hover:text-white/80"
                >
                  Contact
                </Link>
                <div className="border-t border-white/20 pt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button
                    className="w-full bg-white text-[#141c2c] hover:bg-white/90"
                    asChild
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
