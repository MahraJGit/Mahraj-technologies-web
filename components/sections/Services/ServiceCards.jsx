"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceCodeToSlug } from "@/lib/services/registry";
import { getServiceIcon } from "@/lib/services/icons";

export default function ServiceCards({ services }) {
  return (
    <section className="bg-black">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => {
            const detailSlug = serviceCodeToSlug[service.code];
            const Icon = getServiceIcon(service.icon);
            const CardWrapper = detailSlug
              ? ({ children }) => (
                  <Link href={`/services/${detailSlug}`} className="block h-full group">
                    {children}
                  </Link>
                )
              : ({ children }) => <>{children}</>;

            return (
              <div
                key={service.id}
                className="relative border border-zinc-900/80"
              >
                <CardWrapper>
                  <motion.div
                    whileHover={{ scale: detailSlug ? 1.02 : 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`p-8 h-full flex flex-col min-h-[300px] md:min-h-[380px] lg:min-h-[440px] ${detailSlug ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="text-[10px]  text-zinc-600 pt-2">
                        {service.id} / {service.code}
                      </div>
                    </div>

                    <h3 className="text-white text-3xl font-bold mb-6 leading-[1.1] group-hover:text-primary transition-colors min-h-[70px]">
                      {service.title}
                    </h3>

                    <p className="text-zinc-500  text-base leading-relaxed mb-8 max-w-md group-hover:text-zinc-400 transition-colors">
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-[11px]  text-zinc-400 uppercase group-hover:text-zinc-300 transition-colors"
                          >
                            <span className="text-primary text-1xl">&gt;</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {detailSlug && (
                        <p className="mt-8 inline-flex items-center gap-2 text-primary text-xs font-bold uppercase">
                          View Service Details
                          <ArrowRight className="w-4 h-4" />
                        </p>
                      )}
                    </div>
                  </motion.div>
                </CardWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
