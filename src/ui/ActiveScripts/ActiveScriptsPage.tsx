/**
 * Root React Component for the "Active Scripts" UI page. This page displays
 * and provides information about all of the player's scripts that are currently running
 */
import React from "react";

import { ScriptProduction } from "./ScriptProduction";
import { ServerAccordions } from "./ServerAccordions";

import { WorkerScript } from "../../Netscript/WorkerScript";

import Typography from "@mui/material/Typography";

interface IProps {
  workerScripts: Map<number, WorkerScript>;
}

export function ActiveScriptsPage(props: IProps): React.ReactElement {
  return (
    <>
      <Typography>
        此页面显示当前在每台机器上运行的所有脚本的列表。 它还提供有关每个脚本制作的信息。 这些脚本按运行它们的服务器的主机名进行分类。
      </Typography>

      <ScriptProduction />
      <ServerAccordions {...props} />
    </>
  );
}
