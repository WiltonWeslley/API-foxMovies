import "./Recomends.css"
import OPh    from "../filmComp/Openheimer";
import WITCH  from "../filmComp/WITCH";
import MARIO  from "../filmComp/MARIO";
import SRs    from "../filmComp/SR";
import OPt    from "../filmComp/OP";
import AsB    from "../filmComp/AsB";
import Avngrs from "../filmComp/Avngrs";
import IRLND  from "../filmComp/IRLND";
import IniP   from "../filmComp/IniP";
import VDV    from "../filmComp/VDV";
import IdM    from "../filmComp/IdM";




function Recomends(){
  return(
        <>
          <div className='recomends'>
          <div className="tt">
            <h1 className="tt2">Recomendados</h1>
            </div>
    <li className='itemsr'>
                  <OPh/>
                  <WITCH/>
                  <MARIO/>
                  <SRs/>
                  <OPt/>
                  <AsB/>
                  <Avngrs/>
                  <IRLND/>
                  <IniP/>
                  <IdM/>
                  <VDV/>

    <div className="mrq1">

    </div>
    

       
  </li>
</div>
      </>
    )
}

export default Recomends