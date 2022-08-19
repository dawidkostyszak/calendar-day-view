import React from 'react';
import styled from 'styled-components';
import addMinutes from 'date-fns/addMinutes';
import format from 'date-fns/format';

import { EventType } from 'types/event';
import { Event } from 'components/Event';

const Timelines = styled.div`
  padding-top: 16px;
`;
const Timeline = styled.div`
  height: 40px;
  position: relative;
  padding-right: 8px;
  display: block;
  font-size: 0.675rem;
  top: -6px;
`;

const Grid = styled.div`
  flex: 1 1 0;
  display: flex;
  padding-top: 16px;
  position: relative;
`;

const GridTiles = styled.div`
  z-index: 1;
`;

const Tile = styled.div`
  height: 40px;
  &:after {
    content: '';
    border-bottom: black 1px solid;
    position: absolute;
    width: 100%;
    margin-top: -1px;
    z-index: 3;
    pointer-events: none;
  }
`;

const GridCellContainer = styled.div`
  position: relative;
  padding: 0 12px;
  box-sizing: border-box;
  flex: 1 0 auto;
  width: 129px;
  min-width: 129px;
  border-right: white 1px solid;
  overflow: visible;
`;
const GridCell = styled.div`
  grid-column-gap: 3px;
  z-index: 2;
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(96, 10px);
`;
const Cell = styled.div`
  z-index: 2;
  border-radius: 5px;
  padding: 0 4px;
  margin: 1px 0;
`;

const timelines = Array.from({ length: 24 }, (v, i) => i * 60);
const startOfDay = new Date(
  new Date(0).valueOf() + new Date(0).getTimezoneOffset() * 60 * 1000
);

type DayGridProps = {
  events: EventType[];
};

export const DayGrid = ({ events }: DayGridProps) => {
  return (
    <>
      <Timelines>
        {timelines.map((timelineValue) => (
          <Timeline key={`timeline-${timelineValue}`}>
            {format(addMinutes(startOfDay, timelineValue), 'HH:mm')}
          </Timeline>
        ))}
      </Timelines>
      <Grid>
        <GridTiles>
          {timelines.map((timelineValue) => (
            <Tile key={`tile-${timelineValue}`} />
          ))}
        </GridTiles>
        <GridCellContainer>
          <GridCell>
            {events.map(({ id, start, end, title }) => {
              const startGridRow = start === 0 ? 1 : Math.ceil(start / 15) + 1;
              const endGridRow = Math.ceil(end / 15) + 1;
              return (
                <Cell
                  key={id}
                  style={{ gridRow: `${startGridRow} / ${endGridRow}` }}
                >
                  <Event start={start} end={end} title={title} />
                </Cell>
              );
            })}
          </GridCell>
        </GridCellContainer>
      </Grid>
    </>
  );
};
