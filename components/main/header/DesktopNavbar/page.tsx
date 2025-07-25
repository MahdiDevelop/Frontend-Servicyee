import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <nav className="hidden md:block bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-4 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start space-x-8 overflow-x-auto py-4 text-sm">
          <Link href="/todaysdeals" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Todays Deals</Link>
          <Link href="/beauty" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Beauty & Spas</Link>
          <Link href="https://marketplace-vhbe.onrender.com/" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Home Services</Link>
          <Link href="/food" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Food & Grocery</Link>
          <Link href="/beauty" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Travel</Link>
          <Link href="/beauty" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Goods</Link>
          <Link href="/beauty" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Local</Link>
          <Link href="/TodaysDeals" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Gifts</Link>

        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
