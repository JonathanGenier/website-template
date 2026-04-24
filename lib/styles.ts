// General
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-3 focus-visible:ring-offset-white";

// Navbar Styles
export const navbarCTA = `bg-primary text-white text-sm font-semibold rounded-lg text-center transition 
   shadow-md hover:shadow-sm hover:opacity-80 ${focusRing}`;

export const mobileMenuButton = `transition bg-primary text-white hover:opacity-80 ${focusRing}`;

export const navbarLink = `text-primary font-semibold transition hover:text-secondary ${focusRing}`;

export const navbarActiveLink = "text-accent hover:text-secondary";

export const mobileMenuLink = `border-secondary font-semibold text-primary transition hover:bg-secondary/10 ${focusRing}`;

export const mobileMenuActiveLink = "text-accent hover:bg-secondary/10";

export const mobileMenuBottomCTA = "border-secondary";

// Language Toggler
export const languageToggler = `inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-zinc-100 ${focusRing}`;

// Footer styles
export const footer = "bg-primary text-white text-sm";

export const footerSocialIcon =
  "text-accent/80 hover:text-accent transition-colors";

export const footerLink =
  "text-white   hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export const footerTitle = "text-lg font-semibold border-accent";

export const footerContactIcon = "text-accent";

export const footerBottomContainer = "border-accent";
