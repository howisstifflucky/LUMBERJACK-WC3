import { Timer, Unit } from "w3ts";
import { Players } from "w3ts/globals";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";

const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);

function tsMain() {
  print("Welcome to TypeScript!");
  print(Players);

  const unit = new Unit(Players[0], FourCC("hfoo"), 0, 0, 270);
  unit.name = "TypeScript";

  new Timer().start(1.0, true, () => {
    unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color;
  });
}

function tsPlayers() {
  print(Players);
}
let players: Array<string> = [];

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
