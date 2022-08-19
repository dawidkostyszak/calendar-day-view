import useSWR from 'swr';
import styled from 'styled-components';

import { DayGrid } from 'components/DayGrid';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

const DayView = styled.div`
  position: relative;
  display: flex;
  padding: 0 32px;
`;

export default function Index() {
  const { data, error } = useSWR(
    '{ events { id, title, start, end } }',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <DayView>
      <DayGrid events={events} />
    </DayView>
  );
}
