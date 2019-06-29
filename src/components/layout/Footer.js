import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white sm:px-10 lg:px-20 xl:px-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <div className="text-6xl font-black italic uppercase leading-tight">1Ramp</div>
          <div className="ml-2 text-lg">By <a className="border-primary border-b-2 text-primary ml-2" href="https://hapramp.com" target="__new">HapRamp Studio</a></div>
        </div>
        <ul className="flex text-lg mt-8 md:mt-4 flex-wrap -ml-6 md:ml-8">
          <li className="ml-6 mb-4"><a href="https://www.linkedin.com/company/13405668/" target="__new">LinkedIn</a></li>
          <li className="ml-6 mb-4"><a href="https://www.facebook.com/the1ramp/" target="__new">Facebook</a></li>
          <li className="ml-6 mb-4"><a href="https://www.instagram.com/the1ramp/" target="__new">Instagram</a></li>
          <li className="ml-6 mb-4"><a href="https://twitter.com/the1ramp" target="__new">Twitter</a></li>
          <li className="ml-6 mb-4"><a href="https://medium.com/1ramp" target="__new">Medium</a></li>
          <li className="ml-6 mb-4"><a href="mailto:hi@1ramo.io">hi@1ramp.io</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;