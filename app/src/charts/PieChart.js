import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

export default function({ data }) {
  // dont know why but in built label prop not working
  const done = data.map((a) => ({ ...a, label: `${a.y} - ${a.label}` }));
  return (
    <VictoryPie
      data={done}
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
      />
  );

}