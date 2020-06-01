import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import BlogList from 'components/BlogList/BlogList';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin: 30px;
`;

const Results = styled.h3`
  margin: 8px 30px;
`;

const initialState = { isLoading: false, results: [], value: '' };

export default class BlogSearch extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.data, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div>
        <SearchWrapper>
          <Search
            size="large"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            showNoResults={false}
            input={{
              input: {
                placeHolder: 'Search within topic',
                tabIndex: 0,
                autoComplete: 'off',
                class: 'prompt'
              }
            }}
            {...this.props}
          />
        </SearchWrapper>

        {value && <Results>Results for ‘{value}’</Results>}

        <BlogList data={value ? results : this.props.data} />
      </div>
    );
  }
}
