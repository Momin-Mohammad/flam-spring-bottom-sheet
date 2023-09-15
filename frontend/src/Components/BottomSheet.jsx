import { useState } from "react";
import styles from "./BottomSheet.module.css";
import DropDown from "./DropDown";
import {BiSolidDownArrow,BiSolidRightArrow} from "react-icons/bi"

export default function BottomSheet(){
    let closed;
    let halfOpen;
    let fullyOpen;
    console.log(window.innerHeight)
    if(window.innerHeight <= 700){
        closed = "20vh";
        halfOpen = "50vh";
        fullyOpen = "75vh";
    }else if (window.innerHeight <=1100){
        closed = "35vh";
        halfOpen = "60vh";
        fullyOpen = "80vh";
    }else{
        closed = "60vh";
        halfOpen = "75vh";
        fullyOpen = "85vh"
    }
    const [snap,setSnap] = useState(halfOpen);
    const[dropdown,setDropdown] = useState(false);

    const changeSnap = (value)=>{
        setSnap(value)
    }

    return(
        <div className={styles.BottomSheet_mainDiv}>
            <div className={styles.BottomSheet_button_Div}>
            <button onClick={()=>changeSnap(fullyOpen)}>Fully open</button>
            <button onClick={()=>changeSnap(halfOpen)}>Half open</button>
            <button onClick={()=>changeSnap(closed)}>Closed</button>
            </div>

            <div style={{height:snap}}>
                <div 
                onClick={()=>setDropdown(!dropdown)}
                className={styles.BottomSheet_dropdownDiv}>
                <div>{dropdown?<BiSolidDownArrow/>:<BiSolidRightArrow/>}</div>
                <div>Tap to dropdown</div>
            </div>
            { dropdown?<DropDown />:null}
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam suscipit consequuntur nobis perferendis beatae eos quasi sed ducimus. Maxime iusto exercitationem rem ut repudiandae, laboriosam voluptatum fugiat. Eveniet, quas.

            </div>

            </div>
        </div>
    )
}