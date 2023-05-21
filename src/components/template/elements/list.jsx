import { useState } from "react";
import random from "../../../service/random";
import Button, { AddBtn } from "./button";

export default function List({ modifyElement, newParagraphs }) {
  const [listItems, setListItems] = useState([
    <ListElement modifyElement={modifyElement} />,
  ]);
  function addNewListItem() {
    setListItems([...listItems, <ListElement modifyElement={modifyElement} />]);
  }
  return (
    <>
      <div class="tasks_list_section">
        <AddBtn onClick={() => newParagraphs(addNewListItem)} />
        <ul class="tasks_list">{listItems}</ul>
      </div>
    </>
  );
}

export function ListElement({ modifyElement }) {
  let listElId = "li-" + random();
  return (
    <li class={`task_ ${listElId}`}>
      <span class="square"></span>
      Providing quality assistance to management
      <Button onClick={() => modifyElement(listElId)} />
    </li>
  );
}
