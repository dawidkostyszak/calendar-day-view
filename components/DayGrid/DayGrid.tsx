import React from 'react';
import styled from 'styled-components';
import addMinutes from 'date-fns/addMinutes';
import format from 'date-fns/format';

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

type DayGridProps = {
  children: React.ReactNode;
};

const timelines = Array.from({ length: 24 }, (v, i) => i * 60);
const startOfDay = new Date(
  new Date(0).valueOf() + new Date(0).getTimezoneOffset() * 60 * 1000
);

export const DayGrid = ({ children }: DayGridProps) => {
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
      </Grid>
      <div>{children}</div>
    </>
  );
};
