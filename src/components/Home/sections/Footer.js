import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white px-6 sm:px-10 lg:px-20 xl:px-0">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between">
        <div className="mt-8 md:mt-0">
        <a href="https://gosocial.io" className="text-6xl font-black italic leading-tight" rel="noopener noreferrer" target="_blank">GoSocial</a>
          <div className="ml-2 text-lg">By <a rel="nofollow"  className="border-white border-b-2 ml-2" href="https://hapramp.com" target="__new">HapRamp Studio</a></div>
        </div>
        <ul className="flex text-lg flex-wrap -ml-6 md:ml-8 md:mt-4">
          <li className="ml-6 mb-4"><a href="https://blog.gosocial.io/" rel="noopener noreferrer" target="_blank">Blog</a></li>
          <li className="ml-6 mb-4"><a href="https://facebook.com/gosocial.io/" rel="noopener noreferrer" target="_blank">Facebook</a></li>
          <li className="ml-6 mb-4"><a href="https://instagram.com/gosocial.io/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
          <li className="ml-6 mb-4"><a href="https://twitter.com/gosocial_app" rel="noopener noreferrer" target="_blank">Twitter</a></li>
          
          <li className="ml-6 mb-4"><a href="/privacy-policy.html" target="_blank">Privacy Policy</a></li>
          <li className="ml-6 mb-4"><a href="/terms.html" target="_blank">Terms</a></li>
          
          <li className="ml-6 mb-4"><a href="mailto:gosocial@hapramp.com">gosocial@hapramp.com</a></li>
          <li className="ml-6 mb-4"><Link to="/creators" className="border-primary border-b-2 text-primary">Become Creator</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
