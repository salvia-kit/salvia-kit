import { ChildrenType } from '@/utils/globalTypes';

const style = {
  card: `relative flex flex-col rounded-lg shadow-custom`,
  cardBody: `block flex-grow flex-shrink px-3 py-5`,
  cardTitle: `font-semibold text-custom dark:text-white mb-3`,
};

function Card({ children }: ChildrenType) {
  return <div className={style.card}>{children}</div>;
}

function CardBody({ children }: ChildrenType) {
  return <div className={style.cardBody}>{children}</div>;
}

function CardTitle({ children }: ChildrenType) {
  return <h2 className={style.cardTitle}>{children}</h2>;
}

export { Card, CardBody, CardTitle };
