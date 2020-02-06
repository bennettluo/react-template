import React from 'react';
import Widget from '../Item';
import { TypeWidget } from '../types';

const WidgetList = React.memo(function WidgetList({ widgets }: any) {
  return widgets.map((widget: TypeWidget, index: number) => (
    <Widget widget={widget} index={index} key={widget.id} />
  ));
});

export default WidgetList;
