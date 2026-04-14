"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  {
    id: "01",
    location: "ISLAMABAD, PK",
    coordinates: "33.5194° N, 73.1549° E",
    status: "ACTIVE",
    address: "World Trade Center - Office Number - 4087 - Islamabad - Pakistan",
    role: "ENGINEERING HUB",
    mapSrc: "https://maps.google.com/maps?q=33.5194,73.1549&z=15&output=embed"
  },
  {
    id: "02",
    location: "DUBAI, UAE",
    coordinates: "25.1909181° N, 55.2847749° E",
    status: "OPERATIONAL",
    address: "B2B Office Tower - Office Number - 2205 - Marasi Drive Street - Business Bay - Dubai - United Arab Emirates",
    role: "HEADQUARTERS",
    mapSrc: "https://www.google.com/maps?q=25.1909181,55.2847749&hl=en&z=17&output=embed"
  }
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <div className="space-y-6">
        {/* <span className="text-primary  text-[10px] tracking-[0.4em] uppercase font-bold flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary" />
          INFRASTRUCTURE NODES
        </span> */}
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
          Global <br />
          <span className="text-zinc-600">Operations</span>
        </h2>
      </div>

      <div className="grid gap-8">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative p-8 border border-zinc-900 bg-zinc-950/50 hover:border-primary/30 transition-colors rounded-lg overflow-hidden"
          >
            {/* Status Indicator */}
            {/* <div className="absolute top-6 right-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px]  text-zinc-500 tracking-widest">{node.status}</span>
            </div> */}

            <div className="flex flex-col gap-8">
              <div>
                {/* <span className="text-primary  text-xs mb-2 block tracking-widest uppercase opacity-70 font-bold text-center sm:text-left">NODE // {node.id}</span> */}
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase text-center sm:text-left">{node.location}</h3>
                <p className=" text-[13px] text-zinc-500 mt-2 uppercase tracking-tight text-center sm:text-left">{node.coordinates}</p>
              </div>

              <div className="pt-8 border-t border-zinc-900 flex flex-col gap-3">
                <span className="text-xs text-white  tracking-widest uppercase italic opacity-60">{node.role}</span>
                <p className="text-base text-zinc-400 leading-relaxed max-w-md">{node.address}</p>
              </div>

              {/* Embedded Map */}
              <div className="mt-4 rounded-lg overflow-hidden h-40 border border-zinc-800/50">
                <iframe
                  src={node.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${node.location}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Direct Comms */}
      <div className="mt-12 p-10 border border-primary/20 bg-primary/5 rounded-xl backdrop-blur-sm">
        <h4 className="text-white font-black text-lg uppercase tracking-widest mb-8">Direct Channels</h4>
        <div className="grid gap-8">
          <div className="flex flex-col">
            <span className="text-xs  text-primary tracking-[0.4em] uppercase mb-2 font-bold select-none opacity-70">Phone</span>
            <span className="text-white text-2xl  tracking-tighter">+971 58 585 8585</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs  text-primary tracking-[0.4em] uppercase mb-2 font-bold select-none opacity-70">Email</span>
            <span className="text-white text-2xl  tracking-tighter">inquiries@mahrajtechnologies.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
