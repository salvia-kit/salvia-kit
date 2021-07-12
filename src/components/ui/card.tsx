import { ChildrenType } from '@/src/utils/childrenType';

const style = {
  cardText: `text-gray-500`,
  cardBody: `block flex-grow flex-shrink px-3 py-5`,
  cardTitle: `font-semibold text-gray-700 mb-3`,
  card: `relative flex flex-col  rounded-lg`,
};

const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

function Card({ children }: ChildrenType) {
  return (
    <div className={style.card} style={inlineStyle}>
      {children}
    </div>
  );
}

function CardBody({ children }: ChildrenType) {
  return <div className={style.cardBody}>{children}</div>;
}

function CardTitle({ children }: ChildrenType) {
  return <h3 className={style.cardTitle}>{children}</h3>;
}

function CardText({ children }: ChildrenType) {
  return <div className={style.cardText}>{children}</div>;
}

export { Card, CardBody, CardText, CardTitle };
