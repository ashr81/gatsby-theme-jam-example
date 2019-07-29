/** @jsx jsx */
import React from 'react';
import { Styled, jsx, Flex } from "theme-ui"

const TimelineList = ({ timelineEvents }) => {
  return timelineEvents.map(timeline => (
    <Flex sx={{
      flexDirection: 'column',
      my: 0,
      py: 0
    }}>
      <Flex sx={{
        justifyContent: 'space-between'
      }}>
        <Styled.h3>{timeline.name}</Styled.h3>
        <Styled.p>{timeline.startDate} - {timeline.endDate}</Styled.p>
      </Flex>
      <Styled.p>{timeline.description}</Styled.p>
    </Flex>
  ))
}

export default TimelineList;