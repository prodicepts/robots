import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scrol', height:'400px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;