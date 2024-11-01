import React from "react";
import planting from "../Asserts/planting.png";
import joinus from '../Asserts/join-us.png';
import phone from '../Asserts/phone.png';
import amico from '../Asserts/amico.png'

function Events() {
  return (
    <div>
      <section className="w-full mt-[-50px]">
        <div className="heading p-14">
          <h1 className="text-3xl font-bold mb-5">Important Events & Dates</h1>
          <h1 className="text-2xl font-bold text-gray-300 text-right mt-[-30px]">
            2024
          </h1>
          <hr />
        </div>

        <div className="parent px-14 py-3 bg-gray-100">
          <div className="card ">
            {/* Card 1 */}
            <div className=" bg-white card-body p-9 flex hover:shadow-xl hover:translate-x-1 mb-2 border shadow-sm">
              <img src={planting} alt="Image" width="25%" object-cover />
              <div className="content p-6 border-l-2">
                <h1 className="text-right font-thin mb-2">Nov 24, 2024</h1>
                <h1 className="text-xl font-bold">Seed Supply Tender Submission - Deadline Dates</h1>
                <p className="my-3">
                  Last day to submit bids for the Ministry’s seed supply tender.
                  Ensure all documentation is complete to participate in this
                  essential procurement for Liberia’s agricultural growth.
                </p>
                <div className="text-right">
                   <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>View Details →</a>
                </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className=" bg-white card-body p-9 flex hover:shadow-xl hover:translate-y-1 mb-2 border shadow-sm">
              <img src={joinus} alt="Image" width="25%" object-cover />
              <div className="content p-6 border-l-2">
                <h1 className="text-right font-thin mb-2">Nov 24, 2024</h1>
                <h1 className="text-xl font-bold">Procurement Compliance & Bidding Best Practices</h1>
                <p className="my-3">
                Join us for an in-depth workshop covering compliance guidelines and tips for successful bids. Open to all registered vendors. Reserve your spot to enhance your understanding of procurement requirements.
                </p>
                <div className="text-right">
                   <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>Register Now →</a>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className=" bg-white card-body p-9 flex hover:shadow-xl hover:translate-x-1 mb-2 border shadow-sm">
              <img src={phone} alt="Image" width="25%" object-cover />
              <div className="content p-6 border-l-2">
                <h1 className="text-right font-thin mb-2">Nov 24, 2024</h1>
                <h1 className="text-xl font-bold">Deadline for 2024 Vendor Registration</h1>
                <p className="my-3">
                Final deadline to register as a vendor for this year. Don’t miss your chance to access procurement opportunities with the Ministry of Agriculture.
                </p>
                <div className="text-right">
                   <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>View Details →</a>
                </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className=" bg-white card-body p-9 flex hover:shadow-xl hover:translate-y-1 mb-2 border shadow-sm">
              <img src={amico} alt="Image" width="25%" object-cover />
              <div className="content p-6 border-l-2">
                <h1 className="text-right font-thin mb-2">Nov 24, 2024</h1>
                <h1 className="text-xl font-bold">Irrigation System Installation</h1>
                <p className="my-3">
                New opportunity to bid for the installation of irrigation systems across multiple agricultural zones. Check eligibility criteria and download tender documents to get started.
                </p>
                <div className="text-right">
                   <a href="#" className='font-semibold mr-4 text-[17px] underline hover:text-green-900'>Register Now →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
