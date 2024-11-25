import {makeDecorator} from '@storybook/preview-api'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import MockDate from 'mockdate';

dayjs.extend(utc)

export const withMockedDate = makeDecorator({
  name: 'withMockedDate',
  parameterName: 'mockDate',
  wrapper: (storyFn, context, {parameters: date}) => {
    MockDate.reset();

    if (date instanceof Date) {
      MockDate.set(dayjs(date).utc(true).toDate())
    }
    return storyFn(context)
  }
})
