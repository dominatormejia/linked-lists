import "./styles.css";
import { LinkedList } from "./linkedList";

const list = new LinkedList();

list.prepend("dog");
list.prepend("cat");
list.prepend("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.at(2));
