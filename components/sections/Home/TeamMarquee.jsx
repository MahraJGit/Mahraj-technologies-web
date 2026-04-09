"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import team1 from "@/public/team1.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Aahil Ahmed",
    designation: "Chief Technical Architect",
    image: team1,
  },
  {
    id: 2,
    name: "Zoya Malik",
    designation: "Lead Systems Engineer",
    image: team1,
  },
  {
    id: 3,
    name: "Rayan Khan",
    designation: "AI Research Lead",
    image: team1,
  },
  {
    id: 4,
    name: "Sarah Sheikh",
    designation: "Backend Engineering Lead",
    image: team1,
  },
  {
    id: 5,
    name: "Ibrahim Noor",
    designation: "Cloud Infrastructure Specialist",
    image: team1,
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative w-[280px] md:w-[350px] aspect-[4/5] mx-4 flex-shrink-0 overflow-hidden bg-zinc-900 rounded-lg shadow-2xl"
    >
      {/* Grayscale to Color Image */}
      <motion.div
        variants={{
          initial: { filter: "grayscale(100%)", scale: 1.05 },
          hover: { filter: "grayscale(0%)", scale: 1.1 }
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </motion.div>

      {/* Robust Hover Border Layer */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        className="absolute inset-0 border border-primary/70 rounded-lg pointer-events-none z-20"
      />

      {/* Overlay with details */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 10 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 pointer-events-none z-10"
      >
        <span className="text-primary  text-[10px] tracking-widest uppercase font-bold mb-2">
          {member.designation}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">
          {member.name}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default function TeamMarquee() {
  // Simple duplication for a 0% to -50% seamless loop
  const displayTeam = [...teamMembers, ...teamMembers];

  return (
    <section className="w-full bg-[#050505] py-24 overflow-hidden border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-16">
        <div className="flex flex-col gap-4 text-center">
          {/* <span className="text-primary  text-sm tracking-[0.4em] uppercase font-bold">
            Our Personnel // MAHRAJ_CORE
          </span> */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Architects of <br />
            <span className="text-zinc-600">The Digital Frontier</span>
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-4 flex overflow-hidden lg:hover:pause-track"
      >
        {/* Infinite Scrolling Track */}
        <div className="flex w-max animate-marquee-infinite">
          {displayTeam.map((member, index) => (
            <TeamMemberCard key={`${member.id}-${index}`} member={member} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
