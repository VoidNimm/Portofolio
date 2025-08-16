import './framer/styles.css'

import AnimatedNavigation2FramerComponent from './framer/animated-navigation-2'
import GallerySectionFramerComponent from './framer/gallery-section'
import ContactSectionFramerComponent from './framer/contact-section'
import FooterFramerComponent from './framer/footer'
import TextFramerComponent from './framer/text'
import ClientSection2FramerComponent from './framer/client-section-2'
import ExperienceCardFramerComponent from './framer/experience-card'
import StackCardFramerComponent from './framer/stack-card'
import StatCardFramerComponent from './framer/stat-card'
import ShowcaseFramerComponent from './framer/showcase'
import PrimaryButtonFramerComponent from './framer/primary-button'
import ItemFramerComponent from './framer/item'
import Item2FramerComponent from './framer/item-2'
import Item3FramerComponent from './framer/item-3'
import Item4FramerComponent from './framer/item-4'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(0,_0, 0)]'>
      <AnimatedNavigation2FramerComponent.Responsive/>
      <GallerySectionFramerComponent.Responsive/>
      <ContactSectionFramerComponent.Responsive/>
      <FooterFramerComponent.Responsive
        backToTop={"/"}
      />
      <TextFramerComponent.Responsive/>
      <ClientSection2FramerComponent.Responsive/>
      <ExperienceCardFramerComponent.Responsive
        company={"School Project – Website Kantin Sekolah"}
        duration={"2025"}
        position={"SMK Negeri 6 Jakarta"}
        description={"Create a web application to manage school canteen transactions and menus using PHP, MySQL, CSS, and Bootstrap."}
      />
      <StackCardFramerComponent.Responsive
        aboutTool={"Web design platform"}
        description={"The internet is your canvas. Framer is where design and publish stunning sites based in Amsterdam."}
        percentageModel={"95%"}
        toolHardwareName={"FRAMER"}
      />
      <StatCardFramerComponent.Responsive
        title={"STACKS"}
        suffix={"+"}
        speedMs={50}
        endNumber={7}
      />
      <ShowcaseFramerComponent.Responsive/>
      <PrimaryButtonFramerComponent.Responsive
        link={"https://drive.google.com/file/d/1Issw97gs-kreC7QWev66jO6YC2FdF0L0/view?usp=drive_link"}
        text={"Download CV"}
        newTab={true}
        smoothScroll={false}
      />
      <ItemFramerComponent.Responsive
        align={"Start"}
        title={"Eventastic"}
      />
      <Item2FramerComponent.Responsive
        align={"Start"}
        title={"Perpus mu."}
      />
      <Item3FramerComponent.Responsive
        align={"Start"}
        title={"Kantin"}
      />
      <Item4FramerComponent.Responsive
        align={"Start"}
        title={"DryDown"}
      />
    </div>
  );
};