export type TypeWidget = {
  id: string;
  height: number;
  content: string;
};

export type WidgetProps = {
  widget: TypeWidget;
  index: number;
};

export type WidgetAreaProps = {
  size: string;
  type: string;
  list: Array<TypeWidget>;
};

export type reorderFn = (
  list: Array<TypeWidget>,
  startIndex: number,
  endIndex: number,
) => Array<TypeWidget>;

export type WidgetFC = ({ widget, index }: WidgetProps) => JSX.Element;
export type WidgetAreaFC = ({
  size,
  type,
  list,
}: WidgetAreaProps) => JSX.Element;
