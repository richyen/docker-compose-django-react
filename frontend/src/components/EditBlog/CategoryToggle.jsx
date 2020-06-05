import React, { Component } from 'react';
import Styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Bubble = Styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(196, 196, 196, 0.3);
    padding: 32px;
    align-items: center;
    border-radius: 50px;
    width: 300px;
    height: 36px;
    margin: 16px;
    cursor: pointer;
    &:hover {
        opacity: 80%;
    }
`;

const BubbleText = Styled.p`
    font-size: ${props => props.theme.fontSizes.h3};
    font-family: ${props => props.theme.fonts.Poppins};
    text-align: center;
    font-weight: bold;
    line-height: 36px;
`;

const SelectedBubble = Styled(Bubble)`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme.colors.purple};
`;

const SelectedText = Styled(BubbleText)`
    color: ${props => props.theme.colors.white};
    width: 200px;
    margin: 0;
`;

class CategoryToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  onPressCategory = () => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      this.props.onClickCategory(this.props.item);
    });
  };

  resetCategory = () => {
    this.setState({ isSelected: false });
  };

  render() {
    if (this.state.isSelected) {
      return (
        <SelectedBubble onClick={this.onPressCategory}>
          <SelectedText>{this.props.text}</SelectedText>
          <Icon name="checkmark" size="large" inverted fitted />
        </SelectedBubble>
      );
    }
    return (
      <Bubble onClick={this.onPressCategory}>
        <BubbleText>{this.props.text}</BubbleText>
      </Bubble>
    );
  }
}

export default CategoryToggle;
