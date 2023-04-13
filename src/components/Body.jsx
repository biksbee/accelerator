import StartPageNew from "./1.startPage/StartPageNew"
import OurProjects from "./ourProjects/OurProjects"
import Media from "./media/Media"
import Works from "./3.works/Works"
import Demhack from "./4.demhack/Demhack"
import MoreAccelerator from "./moreAccelerator/MoreAccelerator"
import House from "./house/House"
import Team from "./8.team/Team"
import Contacts from "./9.contact/Contacts"


const Body = () => {

    return (
        <div className="overflow-hidden">
            <StartPageNew />
            <OurProjects />
            <Media />
            <Works />
            <Demhack />
            <MoreAccelerator />
            <House />
            <Team />
            <Contacts />
        </div>
    )
} 

export default Body