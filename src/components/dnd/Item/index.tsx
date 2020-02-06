import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { WidgetFC, WidgetProps } from '../types';

const grid = 8;

const Widget: WidgetFC = ({ widget, index }: WidgetProps) => {
  const WidgetItem = styled.div`
    height: ${widget.height}px;
    margin-bottom: ${grid}px;
    background-color: #eee;
    padding: ${grid}px;
  `;

  return (
    <Draggable draggableId={widget.id} index={index}>
      {(provided, snapshot): JSX.Element => {
        const style = {
          backgroundColor: snapshot.isDragging ? 'lightblue' : '#eee',
          ...provided.draggableProps.style,
        };
        return (
          <WidgetItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={style}
          >
            {widget.content}
          </WidgetItem>
        );
      }}
    </Draggable>
  );
};

export default Widget;
