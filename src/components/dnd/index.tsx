import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import WidgetList from './List';
import { sizeMap } from '../../constants/numerics';
import { reorderFn, WidgetAreaFC, WidgetAreaProps, TypeWidget } from './types';
import { useDispatch } from 'react-redux';

const reorder: reorderFn = (
  list: Array<TypeWidget>,
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const WidgetArea: WidgetAreaFC = ({ size, type, list }: WidgetAreaProps) => {
  const dispatch = useDispatch();

  const StyledWidgetList = styled.div`
    width: ${(sizeMap as any)[size]}px;
    margin: 0 8px;
  `;

  const [state, setState] = useState({ widgets: list });

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const widgets = reorder(
      state.widgets,
      result.source.index,
      result.destination.index,
    );

    setState({ widgets });
    dispatch({
      type: 'UPDATE_LAYOUT',
      payload: { widgetType: type, widgets },
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledWidgetList>
          <h2>{type}</h2>
          <Droppable droppableId="list">
            {(provided: DroppableProvided): JSX.Element => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <WidgetList type={type} widgets={state.widgets} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </StyledWidgetList>
      </DragDropContext>
    </>
  );
};

export default WidgetArea;
