import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  __,
  any,
  filter,
  includes,
  map,
  pipe,
  remove,
  split,
  trim,
} from 'ramda';
import { isNotEmpty } from 'ramda-adjunct';

import { FlexContainer } from '../../../FlexContainer';
import { Icon } from '../../../Icon';
import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getLineHeight,
  pxToRem,
} from '../../../../utils/helpers';
import { ColorTypes } from '../../../../theme/colors.enums';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { TagsInputProps } from './TagsInput.types';

const Container = styled(FlexContainer)`
  width: 100%;
  padding: ${pxToRem(4, 16, 0, 16)};
  background: ${getFormStyle('bgColor')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
  color: ${getFormStyle('color')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  padding: ${pxToRem(3, 0)};
  margin-bottom: ${pxToRem(4)};
  color: ${getFormStyle('color')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TagItem = styled.li`
  display: flex;
  align-items: center;
  background: ${getColor('graphite3H')};
  border-radius: ${getBorderRadius};
  color: ${getColor('graphite4B')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  list-style: none;
  margin: ${pxToRem(0, 4, 3, 0)};
  padding: ${pxToRem(4, 8)};
  font-weight: ${getFontWeight('regular')};
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  cursor: pointer;
  font-size: ${pxToRem(10)};
`;

const ItemInput = styled.li`
  background: none;
  flex-grow: 1;
  padding: 0;
`;

const doesValueAlreadyExist = (tags, valueArray) =>
  any(includes(__, tags))(valueArray);

const TagsInput: React.FC<TagsInputProps> = ({
  value: tags = [],
  onChange,
}) => {
  const [input, setInput] = useState('');

  const handleRemoveTag = (index) => {
    const newTags = remove(index, 1, tags);
    onChange(newTags);
  };

  const handleKeyDown = (event) => {
    const { value } = event.target;
    if (event.key === 'Enter' && value) {
      const valueArray = pipe(split(';'), map(trim), filter(isNotEmpty))(value);

      if (doesValueAlreadyExist(tags, valueArray)) {
        return;
      }
      onChange([...tags, ...valueArray]);
      setInput('');
    } else if (event.key === 'Backspace' && !value) {
      handleRemoveTag(tags.length - 1);
    }
  };

  const placeholder = tags.length === 0 ? 'Enter value' : '';

  return (
    <Container flexWrap="wrap">
      <List>
        {tags.map((tag, index) => (
          <TagItem key={tag}>
            {tag}{' '}
            <RemoveButton type="button" onClick={() => handleRemoveTag(index)}>
              <Icon
                color={ColorTypes.graphite2B}
                margin={{ left: 0.4 }}
                name={SSCIconNames.times}
              />
            </RemoveButton>
          </TagItem>
        ))}

        <ItemInput>
          <StyledInput
            placeholder={placeholder}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </ItemInput>
      </List>
    </Container>
  );
};

export default TagsInput;

TagsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
};
