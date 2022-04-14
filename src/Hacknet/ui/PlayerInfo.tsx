/**
 * React Component for displaying Player info and stats on the Hacknet Node UI.
 * This includes:
 * - Player's money
 * - Player's production from Hacknet Nodes
 */
import React from "react";

import { hasHacknetServers } from "../HacknetHelpers";
import { IPlayer } from "../../PersonObjects/IPlayer";
import { Money } from "../../ui/React/Money";
import { MoneyRate } from "../../ui/React/MoneyRate";
import { HashRate } from "../../ui/React/HashRate";
import { Hashes } from "../../ui/React/Hashes";
import Typography from "@mui/material/Typography";

interface IProps {
  totalProduction: number;
  player: IPlayer;
}

export function PlayerInfo(props: IProps): React.ReactElement {
  const hasServers = hasHacknetServers(props.player);

  let prod;
  if (hasServers) {
    prod = <HashRate hashes={props.totalProduction} />;
  } else {
    prod = <MoneyRate money={props.totalProduction} />;
  }

  return (
    <>
      <Typography>
        金钱:
        <Money money={props.player.money} />
      </Typography>

      {hasServers && (
        <>
          <Typography>
            彩虹表: <Hashes hashes={props.player.hashManager.hashes} /> /{" "}
            <Hashes hashes={props.player.hashManager.capacity} />
          </Typography>
        </>
      )}

      <Typography>
        Hacknet {hasServers ? "服务器" : "节点"} 总产量: {prod}
      </Typography>
    </>
  );
}
