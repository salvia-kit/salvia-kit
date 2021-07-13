import React from 'react';
import Button from '@/src/components/ui/button';
import { ChildrenType } from '@/src/utils/childrenType';
import ArrowUpIcon from '@/src/components/icons/arrow-up';
import ArrowDownIcon from '@/src/components/icons/arrow-down';

interface AccordionContextProps {
  className?: string;
  selected?: string;
  toggleItem?: any;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  toggle: string;
  color?: 'custom' | 'white' | 'black' | 'green' | 'blue-sky';
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

interface AccordionPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

const style = {
  item: `flex focus:outline-none`,
  panel: `overflow-hidden transition-height ease duration-500`,
};

const Context = React.createContext<AccordionContextProps>({});

function Accordion({ children }: ChildrenType) {
  const [selected, setSelected] = React.useState('');

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
}: AccordionItemProps) {
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

function AccordionPanel({ children, id }: AccordionPanelProps) {
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
