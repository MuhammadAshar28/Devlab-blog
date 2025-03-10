import React, { Suspense } from "react";
import FooterContactForm from "./FooterContactForm";
import FooterLearn from "./FooterLearn";


export default function Footer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <footer className=" w-full bg-black  mt-12 ">
      <section className="flex flex-col md:flex-row  ">
        <FooterLearn />
        <FooterContactForm />
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <p className="">
            Developed
            <span>&nbsp;💖&nbsp;By&nbsp;Muhammad Ashar</span>
          </p>
       
        </div>
      
        <div>
          <p className="text-xs text-light">
            © 2024 <span className="text-light font-bold">&nbsp;DEV</span>
            <span className="text-accentDarkPrimary font-bold">
              LAB&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>



      </section>

    </footer>
          </Suspense>
  );
}
