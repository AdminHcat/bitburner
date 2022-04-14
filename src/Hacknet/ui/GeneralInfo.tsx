/**
 * React Component for the Hacknet Node UI
 *
 * Displays general information about Hacknet Nodes
 */
import React from "react";
import Typography from "@mui/material/Typography";

interface IProps {
  hasHacknetServers: boolean;
}

export function GeneralInfo(props: IProps): React.ReactElement {
  return (
    <>
      <Typography>
        Hacknet 是一个全球性的、去中心化的机器网络。
        世界各地的黑客使用它匿名共享计算能力并执行分布式网络攻击，而不必担心被追踪。
      </Typography>
      {!props.hasHacknetServers ? (
        <>
          <Typography>
            {`在这里，您可以购买 Hacknet 节点, 这是一种可以连接 Hacknet 网络并为其贡献资源的专用机器 ` +
              `这使您可以从网络上进行的黑客攻击中获得一小部分利润，` +
              `从本质上讲，您是在出租节点的算力`}
          </Typography>
          <Typography>
            {`您购买的每个 Hacknet 节点都会被动地为您赚钱 ` +
              `每个 Hacknet 节点都可以升级，以提高算力从而增加您从中获得的利润`}
          </Typography>
        </>
      ) : (
        <>
          <Typography>
            {`Here, you can purchase a Hacknet Server, an upgraded version of the Hacknet Node. ` +
              `Hacknet Servers will perform computations and operations on the network, earning ` +
              `you hashes. Hashes can be spent on a variety of different upgrades.`}
          </Typography>
          <Typography>
            {`Hacknet Servers can also be used as servers to run scripts. However, running scripts ` +
              `on a server will reduce its hash rate (hashes generated per second). A Hacknet Server's hash ` +
              `rate will be reduced by the percentage of RAM that is being used by that Server to run ` +
              `scripts.`}
          </Typography>
        </>
      )}
    </>
  );
}
