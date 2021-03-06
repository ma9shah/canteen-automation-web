import React from "react";
import styles from "../components/styles";
import axios from 'axios';
import endpoint from "../util/client"


function MenuItemCard(props) {
    const url = endpoint().directory("menu/"+props.id)

    const handleDelete = () => {
        axios.delete(url);
    };
    return (
        <div>
            <br />
            <div style={styles.box1}>
                <div style={styles.item1}>
                    <div style={styles.left_con}>
                        <div style={styles.attribute3}>NAME</div>
                        <div style={styles.attribute4}>{props.name}</div>
                        <div style={styles.attribute3}>CATEGORY</div>
                        <div style={styles.attribute4}>{props.category}</div>
                    </div>
                    <div style={styles.right_con}>
                        <div style={styles.attribute5}>PRICE</div>
                        <div style={styles.attribute6}>{props.price}</div>
                    </div>
                </div>
                <div style={styles.wrap}>
                    <div
                        style={styles.icon_tick}
                        className='fa fa-check-circle fa-2x'
                        aria-hidden='true'
                    />
                    <div
                        style={styles.icon_trash}
                        className='fa fa-trash fa-2x'
                        aria-hidden='true'
                        onClick={handleDelete}

                    />
                    <div style={styles.edit_button}>
                        <button>EDIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItemCard;
