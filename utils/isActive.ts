import { usePathname } from "next/navigation";

// returns true if a link is active otherwise false
export const isActive = (href: string, pathname: string):boolean => {
  const isActive = pathname.endsWith(href);

  return isActive
}