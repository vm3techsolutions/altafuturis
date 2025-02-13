import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" text-gray-900 py-4 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* 1st Column: Logo and Content */}
          <div className="flex flex-col space-y-4 ml-2">
            <Link href="/">
              <img
                src="/altra_logo.png"
                alt="Logo"
                width={120}
                height={20}
                className="object-contain"
              />
            </Link>
            <h6 className="text-md">
            We provide innovative spectrum of 
            Applied Artificial Intelligence, 
            Data Engineering and Salesforce 
            Development services across the industry.
            </h6>
          </div>

          {/* 2nd Column: Quick Links */}
          <div className="flex flex-col space-y-4 lg:col-span-1 ml-12">
            <h4 className="text-lg text-purpleColor font-bold">Quick Links</h4>
            <ul className="space-y-2 ">
              <li><Link href="/about" className="text-md hover:text-yellow-400">About Us</Link></li>
              <li><Link href="/partnership" className="text-md hover:text-yellow-400">Partnership</Link></li>
              <li><Link href="/blogs" className="text-md hover:text-yellow-400">Blogs</Link></li>
              <li><Link href="/career" className="text-md hover:text-yellow-400">Career</Link></li>
              
            </ul>
          </div>

          {/* 3rd Column: Service Menu */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg text-purpleColor font-bold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/web-development" className="text-md hover:text-yellow-400">Web Development</Link></li>
              <li><Link href="/app-development" className="text-md hover:text-yellow-400">App Development</Link></li>
              <li><Link href="/consulting" className="text-md hover:text-yellow-400">Consulting</Link></li>
              <li><Link href="/digital-marketing" className="text-md hover:text-yellow-400">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* 4th Column: Contact Us */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg text-purpleColor font-bold">Contact Us</h4>
            <h6 className="text-md">Email: <a href="mailto:sales@altafuturis.com" className="hover:text-yellow-400">sales@altafuturis.com</a></h6>
            <h6 className="text-md">Phone: <a href="tel:+919764694844" className="hover:text-yellow-400">+91 97646 94844</a></h6>
            <h6 className="text-md">Address: 301, Anish, LMD Square, Bavdhan, Pune, Maharashtra 411023 INDIA</h6>
          </div>
        </div>

        {/* Bottom Bar */}
        
      </footer>
      <div className="bg-gray-900 text-white py-2 px-2 mt-12">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left Side: Copyright */}
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Copyright. Alta-Futuris
            </div>
            
            {/* Right Side: Developed By */}
            <div className="text-sm">
              Designed & Developed by <a href="http://vm3techsolution.com/" className="hover:text-yellow-400">VM3 Tech Solutions LLP</a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Footer;
