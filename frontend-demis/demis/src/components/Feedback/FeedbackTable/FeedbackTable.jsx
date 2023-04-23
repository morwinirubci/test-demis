import React, { useEffect, useRef, useState } from "react";
import style from "../../../style/style.module.css";
import axios from "axios";
import Row from "./Row/Row";

function FeedbackTable() {
  let [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then(function (response) {
      setDataItems(response.data);
    });
  }, [dataItems]);


  console.log(dataItems)
  let rowsItems = dataItems.map((item) => <Row key={item.id} name={item.name} phone={item.phone} email={item.email} address={item.address} />
  );

  return (
    <>
      <table className={style.feedbackTable}>
        <tbody>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Адрес</th>
          </tr>
          {rowsItems}
        </tbody>
      </table>
    </>
  );
}

export const FeedbackTableMemo = React.memo(FeedbackTable);
