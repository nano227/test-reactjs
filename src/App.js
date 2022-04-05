import "./App.css";
import Navbar from "./navbar";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import { React, useState } from "react";

function App() {
  const [addButton, setAddButton] = useState(false);

  const clickHandler = () => {
    setAddButton((e) => !e);
  };

  const toggle = addButton ? 
    <button className="buttom2">ผู้ป่วยออก</button> : <button className="buttom4">เเก้ไขข้อมูล</button>

  return (
    <div>
      <Navbar />
      <div className="flexRow">
        <div className="flexCoi">
          <h1>ห้องเลขที่ 101 VIP Suite</h1>
          <div className="flexRow1">
            <p className="fontcolor">วันที่ : <br></br>(Date)</p>
            <input className="inputbox" placeholder="10 มกราคม 2565" />
          </div>
          <div className="flexRow1">
            <p className="fontcolor">พยาบาลผู้ดูแล : <br></br>(Charge nurse)</p>
            <input className="inputbox" placeholder="อริสา งามสะอาด" />
          </div>
          <div className="flexRow1">
            <p className="fontcolor">เป้าหมายวันนี้ : <br></br>(Goals for today)</p>
            <input className="inputbox" placeholder="ดูแล" />
          </div>
          <div className="box">
            <p className="fontsizep">
              การควบคุมความเจ็บปวดประจำสม่ำเสมอ <br />
              คือเป้าหมายของเรา <br />
              Pain management is our goal always!
            </p>
          </div>
          <div className="box1">
            <p>ระดับคะแนนความเจ็บปวด</p>
            <p>(Wong-Baker FACES Pain Rating Scale)</p>
          </div>
          <div className="box2">
            <img src={img1}></img>
            <p>
              ไม่มีอาการ<br></br>
              No Hurt
            </p>
          </div>
          <img src={img3}></img>
        </div>
        <div className="flexCoi1">
          <div className="flexRow1">
            <div className="right">
              <button className="buttom1">ย้อนกลับ</button>
              <button className="nobutton" onClick={clickHandler}>{toggle}</button>
              {addButton && <button className="buttom3">บันทึก</button>}
            </div>
            </div>
            <div className="boxcenter">
            <img className="img" src={img2}></img>
            </div>
            <div>
            <p className="fontcolorClosemargin">ข้อควรระวัง : </p>
            <p className="fontblackClosemargin">(Precaution)</p>
            <textarea className="inputbox1" placeholder="Node" ></textarea>
            </div>
            <div>
            <p className="fontcolorClosemargin">ความต้องการพิเศษของผู้ป่วย : </p>
            <p className="fontblackClosemargin">(Special needs)</p>
            <textarea className="inputbox1" placeholder="Node" ></textarea>
            </div>
            <div>
            <p className="fontcolorClosemargin">หากมีข้อเสนอแนะเพิ่มเติมสามารถติดต่อหัวหน้าแผนก : </p>
            <p className="fontblackClosemargin">(For any comment please contact head of department) </p>
            <textarea className="inputbox1" placeholder="Node" ></textarea>
            </div>
            <div>
            <p className="fontcolorClosemargin">คำถามที่ต้องการถามแพทย์ : </p>
            <p className="fontblackClosemargin">(Any question ask your doctor)</p>
            <textarea className="inputbox1" placeholder="Node" ></textarea>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
