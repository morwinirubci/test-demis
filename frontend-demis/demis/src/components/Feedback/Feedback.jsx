import React, { useEffect, useState } from "react";
import style from "../../style/style.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {FeedbackTableMemo} from "./FeedbackTable/FeedbackTable";

function Feedback() {
  let [items, setItems] = useState([]);

  console.log(items);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });


  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/form-feedback-proc.php", data)
      .then(function (response) {
        console.log(response.data);
        setItems(response);
       
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.form}
        method="post"
      >
        <input
          {...register("name", {
            required: "Введите имя",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Имя не может содержать цифры",
            },
          })}
          placeholder="Ваше имя"
          type="text"
          name="name"
        />
        <p>{errors.name?.message}</p>
        <input
          {...register("phone", {
            required: "Введите номер",
            minLength: {
              value: 11,
              message: "В номере должно быть 11 цифр",
            },
            pattern: {
              value: /^[0-9+-]+$/,
              message: "Введите номер корректно",
            },
          })}
          placeholder="Телефон"
          type="text"
          name="phone"
        />
        <p>{errors.phone?.message}</p>
        <input
          {...register("email", {
            required: "Введите мейл",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Введите мейл корректно",
            },
          })}
          placeholder="Email"
          type="text"
          name="email"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register("address", { required: "Введите адрес" })}
          placeholder="Адрес"
          type="text"
          name="address"
        />
        <p>{errors.address?.message}</p>
        <button type="submit">Submit</button>
      </form>

      <FeedbackTableMemo />
    </>
  );
}

export default Feedback;
