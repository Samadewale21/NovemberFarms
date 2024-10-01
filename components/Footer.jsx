import Image from 'next/image';
import logo from '@/assets/images/eha.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-green-700 text-primary-content p-10 flex flex-col items-center">
      <aside className="text-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          ></path>
        </svg>
        <p className="font-bold">
          November Farms and Ranches.
          <br />
          Providing healthy food for everyone.
        </p>
        <p>Copyright © {currentYear} - All rights reserved</p>
      </aside>
      <nav className="mt-4">
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#" aria-label="X (formerly Twitter)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.635 6.999c-.731.325-1.514.547-2.341.646.84-.505 1.481-1.303 1.778-2.258-.786.464-1.655.8-2.575.983-.739-.788-1.792-1.28-2.966-1.28-2.247 0-4.073 1.826-4.073 4.074 0 .319.036.628.106.928-3.39-.17-6.39-1.793-8.407-4.254-.352.606-.553 1.309-.553 2.066 0 1.426.726 2.688 1.828 3.418-.674-.022-1.309-.206-1.861-.514v.052c0 1.994 1.419 3.655 3.304 4.032-.347.094-.716.144-1.094.144-.267 0-.525-.025-.778-.073.526 1.644 2.053 2.837 3.867 2.87-1.41 1.104-3.196 1.76-5.134 1.76-.333 0-.659-.019-.982-.058 1.83 1.172 4.012 1.855 6.349 1.855 7.628 0 11.785-6.323 11.785-11.785 0-.179-.004-.357-.013-.534.809-.586 1.51-1.318 2.06-2.148z"></path>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
