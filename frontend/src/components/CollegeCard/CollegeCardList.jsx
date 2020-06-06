import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Styled from 'styled-components';

import { Schools } from '../../utils/agent.js';
import CollegeCard from './CollegeCard';

const StyledHeader = Styled.h3`
  grid-column-end: -1;
  grid-column-start: 1;
  text-align: left;
`;

const CollegeCardList = () => {
  const [schoolsInfo, setSchoolsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collegeInfo = async () => {
      try {
        const collegesData = await Schools.get_all().then(
          response => response.results
        );
        setIsLoading(false);
        setSchoolsInfo(collegesData);
      } catch (error) {
        console.log(error);
      }
    };
    collegeInfo();
  }, []);

  const cards =
    !schoolsInfo.length > 0
      ? null
      : schoolsInfo.map(college => {
          return (
            <Grid.Column mobile={16} tablet={5} computer={5} key={college.id}>
              <CollegeCard
                imgUrl={college.profile_picture_url}
                name={college.name}
                description={college.page_description}
              />
            </Grid.Column>
          );
        });

  return isLoading ? null : (
    <Grid stackable>
      <Grid.Row>
        <StyledHeader>Our Campuses</StyledHeader>
      </Grid.Row>
      <Grid.Row>{cards}</Grid.Row>
    </Grid>
  );
};

export default CollegeCardList;
