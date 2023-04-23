import React from "react";
function Row({name, email, phone, address}) {
    console.log(name)
    return ( <>

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
        </tr>

    </> );
}

export default Row;