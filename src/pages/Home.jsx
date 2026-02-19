import Hero from '../components/sections/Hero';
import Brands from '../components/sections/Brands';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Brands />
            <Services />
            <WhyUs />
            <Process />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
        </>
    );
}
