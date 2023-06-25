import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src="" alt="" />
          <p className="text-xl">
            ModaBella Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <div className="flex gap-3 ">
            <FaFacebookF className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaYoutube className="w-6 h-6" />
          </div>
        </div>
      </footer>
      <hr />
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Mahmud Hasan Sabbir</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
