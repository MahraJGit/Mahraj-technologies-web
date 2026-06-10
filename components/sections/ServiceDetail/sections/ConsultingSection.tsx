import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";

export default function ConsultingSection({
  consultingHeading,
  consultingDescription,
  consultingImage,
  onlinePresenceHeading,
  onlinePresenceDescription,
}) {
  return (
    <section className="bg-black py-12 lg:py-18">
      <div className="site-container">
        
        <div className="grid gap-8 min-[1123px]:grid-cols-2 min-[1123px]:grid-rows-2 items-start">
          
          <div>
            <SectionHeading
              title={consultingHeading}
              description={consultingDescription}
              align="left"
            />
          </div>

          <div className="min-[1123px]:row-span-2">
            <Image
              src={consultingImage}
              alt="Consulting"
              width={700}
              height={700}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div>
            <SectionHeading
              title={onlinePresenceHeading}
              description={onlinePresenceDescription}
              align="left"
            />
          </div>

        </div>
      </div>
    </section>
  );
}