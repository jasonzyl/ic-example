import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as ic_example_idl, canisterId as ic_example_id } from 'dfx-generated/ic_example';

const agent = new HttpAgent();
const ic_example = Actor.createActor(ic_example_idl, { agent, canisterId: ic_example_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await ic_example.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
