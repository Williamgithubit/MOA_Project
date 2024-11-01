import React from "react";
import { HiNewspaper } from "react-icons/hi2";
import { PiFilesFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
function Services() {
  return (
    <div>
      <section className="w-full">
        <div className="heading p-14">
          <h1 className="text-3xl font-bold mb-5">
            Featured Procurement Services
          </h1>
          <hr />
        </div>
      
        <div className="parent p-14 bg-gray-100">
          <div className="wrapper flex justify-center gap-8 mb-4 shadow-green-500">
            <div className="box1 w-[30%] border-1 p-8 bg-white rounded-lg text-center hover:shadow-inner">
              <HiNewspaper size={54} className="border rounded-2xl text-green-900 m-auto"/>
              <h1 className="my-4 text-center text-2xl font-medium">Open Vendor</h1>
              <p className="text-sm mb-2">Explore current Procurement Opportunities</p>
              <hr />
              <p className="my-3">Browse a comprehensive list of open tenders for goods and services essential to Liberia's agricultural sector. </p>
              <a href="#" className="font-medium hover:underline hover:text-green-900">Explore Tender →</a>
            </div>
            {/* Box 2 */}
            <div className="box1 w-[30%] border-1 p-8 bg-white rounded-lg text-center hover:shadow-inner">
              <PiFilesFill size={54} className="border rounded-2xl text-green-900 m-auto"/>
              <h1 className="my-4 text-center text-2xl font-medium">Resources & Guidelines</h1>
              <p className="text-sm mb-2">Access Essential Procurement Resources</p>
              <hr />
              <p className="my-3">Find all the necessary documents, guidelines, and templates you’ll need to succeed in the procurement process.</p>
              <a href="#" className="font-medium hover:underline hover:text-green-900">Explore Tender →</a>
            </div>
            {/* Box 3 */}
            <div className="box1 w-[30%] border-1 p-8 bg-white rounded-lg text-center hover:shadow-inner">
              <FaAward size={54} className="border rounded-2xl text-green-900 m-auto"/>
              <h1 className="my-4 text-center text-2xl font-medium">Awarded Contracts</h1>
              <p className="text-sm mb-2">See Recent Awarded Contracts</p>
              <hr />
              <p className="my-3">Stay informed about recently awarded contracts, fostering transparency and the Ministry’s ongoing projects.</p>
              <a href="#" className="font-medium hover:underline hover:text-green-900">View Contracts →</a>
            </div>
          </div>
          <div className="text-right">
          <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>More Services →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
