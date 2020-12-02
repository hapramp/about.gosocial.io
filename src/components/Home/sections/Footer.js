import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white px-6 sm:px-10 lg:px-20 xl:px-0">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between">
        <div className="mt-8 md:mt-0">
          <Link to="/" className="text-6xl font-black italic leading-tight">GoSocial</Link>
          <div className="ml-2 text-lg">By <a rel="nofollow"  className="border-white border-b-2 ml-2" href="https://hapramp.com" target="__new">HapRamp Studio</a></div>
        </div>
        <ul className="flex text-lg flex-wrap -ml-6 md:ml-8 md:mt-4">
          <li className="ml-6 mb-4"><Link to="/" >Blog</Link></li>
          <li className="ml-6 mb-4"><a rel="nofollow"  href="https://www.facebook.com/getgosocialapp/" target="__new">Facebook</a></li>
          <li className="ml-6 mb-4"><a rel="nofollow"  href="https://www.instagram.com/getgosocial.app/" target="__new">Instagram</a></li>
          <li className="ml-6 mb-4"><a rel="nofollow"  href="https://twitter.com/gosocial_app" target="__new">Twitter</a></li>
          
          <li className="ml-6 mb-4"><a href="/privacy-policy.html" target="__new">Privacy Policy</a></li>
          <li className="ml-6 mb-4"><a href="/terms.html" target="__new">Terms</a></li>
          
          <li className="ml-6 mb-4"><a href="mailto:gosocial@hapramp.com">gosocial@hapramp.com</a></li>
          <li className="ml-6 mb-4"><Link to="contributors" className="border-primary border-b-2 text-primary">Become Contributor</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
