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
    <footer className={`${footer} border-t py-12`}>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-block">
              <Logo variant="dark" className="mb-8" />

              <div className="flex justify-center">
                <div className="flex gap-5">
                  <Link href="#" aria-label="Facebook">
                    <FaFacebook className={`${footerSocialIcon} h-5 w-5`} />
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <FaInstagramSquare
                      className={`${footerSocialIcon} h-5 w-5`}
                    />
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <FaLinkedin className={`${footerSocialIcon} h-5 w-5`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Navigation</h3>
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
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Services</h3>
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
          </div>

          <div>
            <h3 className={`${footerTitle} border-b pb-2 mb-4`}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <FaPhone className={`${footerContactIcon} h-4 w-auto mr-4`} />
                <span>819-111-2222</span>
              </li>
              <li className="flex">
                <MdMail className={`${footerContactIcon} h-4 w-auto mr-4`} />
                <span>info@mapledigital.ca</span>
              </li>
              <li className="flex">
                <FaClock className={`${footerContactIcon} h-4 w-auto mr-4`} />
                <span>Mon – Fri 9AM – 6PM</span>
              </li>
              <li className="flex">
                <IoLocation
                  className={`${footerContactIcon} h-4 w-auto mr-4`}
                />
                <span>Gatineau, Québec</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${footerBottomContainer} mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row`}
        >
          <p>
            © {new Date().getFullYear()} Maple Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className={footerLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={footerLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
