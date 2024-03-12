import styles from './card.module.scss';
import { Row, Col } from 'antd';
import { FC } from 'react';

import type { ICard } from './ICard';

const Card: FC<ICard.Props> = ({ data }) => {
  return (
    <div>
      <Row gutter={[60, 60]}>
        {data.map((item: ICard.Product, index: number) => (
          <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
            <div key={index} className={styles.card}>
              <div className={styles.info}>
                <span className={styles.info__title}>{item?.name}</span>
                <div className={styles.row}>
                  <span className={styles.row__label}>{item.description}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.row__label}>price: </span>
                  <span className={styles.row__value}>{item?.price}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Card;
