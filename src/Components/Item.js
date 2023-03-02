import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Item({ props, handleCheck, handleRemove }) {
  return (
    <div
      className={`flex p-3 rounded-md mb-3 ${
        props.checked ? "bg-green-200" : "bg-gray-50"
      }`}
    >
      <h1 className="w-[97%] break-words mr-3">{props.name}</h1>
      <div className="flex flex-col justify-center items-center ">
        <input
          className="mb-3"
          type="checkbox"
          onChange={(event) => handleCheck(event, props.id)}
          checked={props.checked}
        />
        <FaTrashAlt className="h-10" onClick={() => handleRemove(props.id)} />
      </div>
    </div>
  );
}
