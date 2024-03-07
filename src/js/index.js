import { DataStore } from "./lib/Storehouse/stores";

const [set, get] = DataStore.registerProvider('test');
DataStore.registerSubscriber('test', (v) => console.log(v))
for(let i = 0; i < 10; i++) { set(i) }