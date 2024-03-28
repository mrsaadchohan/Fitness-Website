"use client";

import Membershipslider from "./Membershipslider";

function Membership() {
  return (
    <section className="py-8 xl:py-0 lg:h-[98h] bg-membership bg-cover bg-center relative
    before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 
    before:z-10" id="prices">
      <div className="container mx-auto px-0 h-full flex flex-col xl:pt-24 relative z-20">
        <h2 className="h2 text-white text-center mb-8">Membership</h2>
        <div>
          <Membershipslider />
        </div>
      </div>
    </section>
  );
}

export default Membership;
