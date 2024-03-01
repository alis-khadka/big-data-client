import React from 'react';
import { Card } from 'antd';

const BusinessInfoCard = ({ data, street }) => {
  return (
    <Card title="Suitable Business" style={{ width: "90%", margin: 'auto', marginTop: '30px' }}>
      <p>
        Suitable business type for <strong>{street}</strong> is <strong>{data.naics_group}</strong>.
        Total of <strong>{data.total_count}</strong> businesses have been registered and{' '}
        <strong>{data.active_count}</strong> are still active.
      </p>
    </Card>
  );
};

export default BusinessInfoCard;
