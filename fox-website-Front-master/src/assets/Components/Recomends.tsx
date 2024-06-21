import "./Recomends.css"
import OPh    from "../filmComp/Openheimer";
import WITCH  from "../filmComp/WITCH";
import SRs    from "../filmComp/SR";
import OPt    from "../filmComp/OP";
import AsB    from "../filmComp/AsB";
import Avngrs from "../filmComp/Avngrs";
import IRLND  from "../filmComp/IRLND";
import IniP   from "../filmComp/IniP";
import VDV    from "../filmComp/VDV";
import IdM    from "../filmComp/IdM";
import ClubeDaLuta from "../filmComp/ClubeDaLuta";
import BLR from "../filmComp/BladRun";
import Matr from "../filmComp/Matrix";
import VelozesEF from "../filmComp/VelozesEF";
import PulpFict from "../filmComp/PulpFict";
import MARIO from "../filmComp/MARIO";
import SenhorDosA from "../filmComp/SenhorDosA";
import OSilencioDI from "../filmComp/OSilencioDI";
import Seven from "../filmComp/Seven";
import StarWars4 from "../filmComp/StarWars4";




function Recomends(){

  return(
        <div className="body">
          <div className='recomends'>
          <div className="tt">
            <h1 className="tt2">Recomendados</h1>
          </div>
          <div className="filmesCards">
            <li className='itemsr'>
                          <OPh/>
                          <WITCH/>
                          <Matr/>
                          <SRs/>
                          <OPt/>
                          <AsB/>
                          <Avngrs/>
                          <IRLND/>
                          <IniP/>
                          <IdM/>
                          <VDV/>
                          <ClubeDaLuta/>
                          <BLR/>    
                          <VelozesEF/>
                          <PulpFict/>
                          <MARIO/>
                          <StarWars4/>
                          <SenhorDosA/>
                          <OSilencioDI/>
                          <Seven/>

            </li>
          </div>
        </div>
      </div>
    )
}

export default Recomends