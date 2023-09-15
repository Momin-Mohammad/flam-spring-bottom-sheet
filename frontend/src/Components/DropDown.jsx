import styles from "./DropDown.module.css";

export default function DropDown(){
    return(
        <div className={styles.DropDown_mainDiv}>
            <li>This is content 1</li>
            <li>This is content 2</li>
            <li>This is content 3</li>
            <li>This is content 4</li>
            <li>This is content 5</li>
        </div>
    )
}