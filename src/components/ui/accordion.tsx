import React from 'react';
import { ChildrenType } from '@/utils/globalTypes';
import ArrowUpIcon from '@/components/icons/arrow-up';
import ArrowDownIcon from '@/components/icons/arrow-down';
import Button, { BtnProps } from '@/components/ui/button';

interface IAccordionContextProps {
  className?: string;
  selected?: string;
  toggleItem?: (id: string) => void;
}

interface IAccordionItemProps extends BtnProps {
  toggle: string;
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

function Accordion({ children }: ChildrenType) {
  const [selected, setSelected] = React.useState('');

  const toggleItem = React.useCallback((id: string) => {
    setSelected((prevState) => (prevState !== id ? id : ''));
  }, []);

  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
function useAccordion() {
  return React.useContext(Context);
}

function AccordionItem({
  toggle,
  children,
  color,
  className,
}: IAccordionItemProps) {
  const { selected, toggleItem } = useAccordion();
  return (
    <Button
      onClick={() => (toggleItem ? toggleItem(toggle) : null)}
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
