import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  footer,
  footerSocialIcon,
  footerLink,
  footerTitle,
  footerContactIcon,
  footerBottomContainer,
} from "@/lib/styles";
import { FaPhone, FaClock } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={`${footer} border-t py-12`} aria-label="Website footer">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-block">
              <Logo variant="dark" />

              <div className="flex justify-center mt-8">
                <nav className="flex gap-5" aria-label="Social media links">
                  <a
                    href="#"
                    aria-label="Visit Maple Digital on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      className={`${footerSocialIcon} h-5 w-5`}
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label="Visit Maple Digital on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare
                      className={`${footerSocialIcon} h-5 w-5`}
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label="Visit Maple Digital on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      className={`${footerSocialIcon} h-5 w-5`}
                      aria-hidden="true"
                    />
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Navigation</h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="/" className={footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={footerLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className={footerLink}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Services</h3>
            <nav aria-label="Footer Services">
              <ul className="space-y-3">
                <li>
                  <Link href="/services/web-design" className={footerLink}>
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className={footerLink}>
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services/performance" className={footerLink}>
                    Performance
                  </Link>
                </li>
                <li>
                  <Link href="/services/maintenance" className={footerLink}>
                    Maintenance
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Contact</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex">
                  <FaPhone
                    className={`${footerContactIcon} h-4 w-auto mr-4`}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+18191112222"
                    aria-label="Call Maple Digital at 819-111-2222"
                    className={footerLink}
                  >
                    819-111-2222
                  </a>
                </li>
                <li className="flex">
                  <MdMail
                    className={`${footerContactIcon} h-4 w-auto mr-4`}
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@mapledigital.ca"
                    aria-label="Email Maple Digital at info@mapledigital.ca"
                    className={footerLink}
                  >
                    info@mapledigital.ca
                  </a>
                </li>
                <li className="flex">
                  <FaClock
                    className={`${footerContactIcon} h-4 w-auto mr-4`}
                    aria-hidden="true"
                  />
                  <span>Mon – Fri 9AM – 6PM</span>
                </li>
                <li className="flex">
                  <IoLocation
                    className={`${footerContactIcon} h-4 w-auto mr-4`}
                    aria-hidden="true"
                  />
                  <span>Gatineau, Québec</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div
          className={`${footerBottomContainer} mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row`}
        >
          <p>
            © {new Date().getFullYear()} Maple Digital. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Legal">
            <Link href="/privacy-policy" className={footerLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={footerLink}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
