import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import { useContext } from 'react';
import { themeContext } from './context';
import spec from './student-chart.json';
import { IChart, PureRenderer } from '@kanaries/graphic-walker';
import { useFetch, IDataSource } from './util';

const Welcome: React.FC = () => {
  const { theme } = useContext(themeContext);
  const { dataSource } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');
  console.log(dataSource);

  const chart = spec[0] as IChart;

  return (
    <PageContainer>
      <PureRenderer type="local" rawData={dataSource} visualConfig={chart.config} visualState={chart.encodings} visualLayout={chart.layout} appearance={theme} />
    </PageContainer>
  );
};

export default Welcome;
