import { Heading } from "@/components/ui/heading";
import { SectionHero } from "@/components/ui/section-hero";
import { ServiceCards } from "@/components/services-cards";
import { GetQuoteAndContact } from "@/components/ui/get-quote";

const Services = () => {
    return (
        <section className="md:mx-20 text-center flex flex-col items-center gap-y-1" id="service">
            <Heading label="OUR SERVICES" className="text-[#ED3A85] text-lg" />
            <SectionHero heading="Innovative Digital Solutions" para="We believe technology and design can transform businesses and propel them into the future. We are your digital excellence partners, not just a digital agency."/>
            <ServiceCards />
            <GetQuoteAndContact />
        </section>
    );
}

export default Services;