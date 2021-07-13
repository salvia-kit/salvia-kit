import React from 'react';
import Button from '@/src/components/ui/button';
import { ChildrenType } from '@/src/utils/childrenType';
import ArrowUpIcon from '@/src/components/icons/arrow-up';
import ArrowDownIcon from '@/src/components/icons/arrow-down';

interface IAccordionProps extends ChildrenType {
  defaultPanel?: string;
}

interface IAccordionContextProps {
  className?: string;
  selected?: string;
  toggleItem?: any;
}

interface IAccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  toggle: string;
  color?: 'custom' | 'white' | 'black' | 'green' | 'blue-sky';
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

interface IAccordionPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

const style = {
  item: `flex focus:outline-none`,
  panel: `overflow-hidden transition-height ease duration-500`,
};

const Context = React.createContext<IAccordionContextProps>({});

function Accordion({ children, defaultPanel }: IAccordionProps) {
  const [selected, setSelected] = React.useState(defaultPanel || '');

  const toggleItem = React.useCallback((id) => {
    setSelected((prevState) => (prevState !== id ? id : ''));
  }, []);

  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

function AccordionItem({
  toggle,
  children,
  color,
  className,
  size,
}: IAccordionItemProps) {
  const { selected, toggleItem } = useAccordion();
  return (
    <Button
      onClick={() => toggleItem(toggle)}
      color={color}
      className={className}
      size="sm"
    >
      {children}
      <span className="float-right">
        {selected === toggle ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </span>
    </Button>
  );
}

function AccordionPanel({ children, id }: IAccordionPanelProps) {
  const { selected } = useAccordion();
  const ref = React.useRef<HTMLDivElement>(null);

  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

export { Accordion, AccordionPanel, AccordionItem };
