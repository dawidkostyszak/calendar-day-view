import addMinutes from 'date-fns/addMinutes';
import format from 'date-fns/format';

import styled from 'styled-components';

import { EventType } from 'types/event';

const EventContainer = styled.div<{
  $isExtended: boolean;
}>`
  display: flex;
  flex-direction: ${({ $isExtended }) => ($isExtended ? 'column' : 'row')};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  padding: 4px;
`;

const Title = styled.h1`
  font-size: 0.75rem;
  margin: 0;
`;

const TimeRange = styled.p<{
  $isExtended: boolean;
}>`
  font-size: ${({ $isExtended }) => ($isExtended ? 0.5 : 0.75)}rem;
  margin: 0;
`;

const Colon = styled.span`
  margin-right: 4px;
`;

const startOfDay = new Date(
  new Date(0).valueOf() + new Date(0).getTimezoneOffset() * 60 * 1000
);

type EventProps = Pick<EventType, 'title' | 'start' | 'end'>;

export const Event = ({ title, start, end }: EventProps) => {
  const startTime = format(addMinutes(startOfDay, start), 'HH:mm');
  const endTime = format(addMinutes(startOfDay, end), 'HH:mm');
  const isExtended = end - start >= 60;

  return (
    <EventContainer $isExtended={isExtended}>
      <TimeRange $isExtended={isExtended}>
        {startTime} - {endTime}
        {isExtended ? '' : <Colon>,</Colon>}
      </TimeRange>
      <Title>{title}</Title>
    </EventContainer>
  );
};
