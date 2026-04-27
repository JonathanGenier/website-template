// General
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-3 focus-visible:ring-offset-white";

// Navbar Styles
export const navbarCTA = `bg-primary text-white text-sm font-semibold rounded-lg text-center transition 
   shadow-md hover:shadow-sm hover:opacity-80 ${focusRing}`;

export const navbarLink = `text-primary font-semibold transition hover:text-secondary ${focusRing}`;

export const navbarActiveLink = "text-accent hover:text-secondary";

// Mobile Menu styles
export const mobileMenuStyles = {
  menuContainer: "border-b bg-white shadow-md",
  menuButton: `transition bg-primary text-white hover:opacity-80 rounded-full ${focusRing}`,
  link: `border-b border-secondary font-semibold text-primary hover:bg-secondary/10 ${focusRing}`,
  activeLink: "text-accent",
  linkIcon: "text-primary",
  activeLinkIcon: "text-accent",
  bottomContainer: "border-t border-secondary",
  ctaButton: `bg-primary text-white text-sm font-semibold rounded-lg text-center transition 
   shadow-md hover:shadow-sm hover:opacity-80 ${focusRing}`,
};

// Language Toggler
export const languageToggler = `text-sm ${focusRing} z-51`;
export const languageButton = `text-secondary hover:text-primary hover:cursor-pointer transition ${focusRing}`;
export const languageActive = "text-accent font-semibold";
export const languageMenu = `border border-secondary bg-white shadoow-md overflow-hidden rounded-md`;
export const languageItem = `hover:bg-zinc-100 transition ${focusRing}`;
export const languageAbreviation = "text-xs font-semibold text-secondary";
export const languageLabels = "text-primary";
export const languageCheckIcon = "text-accent";

// Footer styles
export const footer = "bg-primary text-white text-sm";

export const footerSocialIcon =
  "text-accent/80 hover:text-accent transition-colors";

export const footerLink =
  "text-white   hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export const footerTitle = "text-lg font-semibold border-accent";

export const footerContactIcon = "text-accent";

export const footerBottomContainer = "border-accent";
