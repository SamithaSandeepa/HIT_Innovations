import React from "react";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import {uelogo} from "../assets"
import {
    Navbar,
    UniBusiness,
    CardDeal,
    Clients,
    Contactus,
    Footer,
    Stats,
    Testimonials,
    Hero,
} from "../components";

const Uni = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <section id="universal">
                <div className="bg-primary py-5 px-5">
                    <Link
                        to="/"
                        className="px-4 py-2 font-poppins font-medium text-[16px] text-blue-500 bg-primary border border-blue-500 rounded-[10px] outline-none hover:bg-blue-500 hover:text-primary "
                    >
                        &lt;&nbsp;Back
                    </Link>
                </div>
            </section>

            <section className="container mx-auto">
                <div
                    className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
                >
                    <div className="flex flex-row justify-between items-center w-full ">
                       
                    <img src={uelogo} alt="Logo"  style={{ width: "28%", height: "auto", align: "Left" }} />
                   

                        <h1 className="flex-1 font-poppins font-semibold ss:text-[82px] text-[52px] text-bla ss:leading-[100.8px] leading-[75px] uppercase pt-10">
                        <span style={{ color: "#38bdf8" }}>Universal</span>{" "} <span style={{ color: "#ffff"  }}>Energy</span>{" "}
                       
                        {/* <div class="mb-8 ...">mb-8   </div> */}
                        {/* <span style={{ color: "#ffff"  }}>Energy</span>{" "} */}
                        </h1>
                    </div>
                </div>
                     <p className={`${styles.paragraph} mt-5 text-justify`}>
                                    With the aim of creating a energy sufficient Sri Lanka, our company needs to implement a number of very effective projects that have provided solutions to many problems faced by the people of our country. Also, we hope to lead our country to a new path by creating new technology.
                                 We have  provided solar and battery backup systems as a solution for power cuts for the Sir Lanka
                      </p>    

                                <div class="mb-8 ...">mb-8   </div>             
            </section>
        
            <section className="container mx-auto">

            <div className={`${styles.boxWidth}`}>
                 
                {/* <Routes /> */}
                <UniBusiness title="tku" />
                {/* <Navbar /> */}
                <CardDeal />
                {/* <Testimonials /> */}
                {/* <Clients /> */}
                {/* <Contactus /> */}
                <Footer />
            </div>
            </section>
        </div>
    );
}

export default Uni;
