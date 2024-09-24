import InputGroup from '../components/InputGroup/InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    labelSize: {
      control: 'select',
      options: ['xxs', 'sm'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'left'],
    },
    infoText: {
      control: 'text',
    },
    showInfoIcon: {
      control: 'boolean',
    },
    value: {
      control: 'text',
      defaultValue: 'Input...',
    },
    inputSize: {
      control: 'select',
      options: ['24', '32', '36', '40', '44', '48'],
    },
    variant: {
      control: 'inline-radio',
      options: ['Fill', 'Outline'],
    },
    quiet: {
      control: 'boolean',
      defaultValue: false,
    },
    iconBefore: {
      control: 'boolean',
      defaultValue: false,
    },
    iconAfter: {
      control: 'boolean',
      defaultValue: false,
    },
    error: {
      control: 'boolean',
      defaultValue: false,
    },
    alignment: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
  },
};

const Template = (args) => <InputGroup {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  labelSize: 'sm',
  required: false,
  disabled: false,
  labelPosition: 'top',
  infoText: 'This is a hint text to help user.',
  showInfoIcon: true,
  value: 'Input...',
  inputSize: '36',
  variant: 'Fill',
  quiet: false,
  iconBefore: false,
  iconAfter: false,
  error: false,
  alignment: 'left',
};

export const DefaultStateWithIcons = Template.bind({});
DefaultStateWithIcons.args = {
  ...DefaultState.args,
  iconBefore: true,
  iconAfter: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...DefaultState.args,
  error: true,
  value: 'Error Input',
};

export const ErrorStateWithIcons = Template.bind({});
ErrorStateWithIcons.args = {
  ...DefaultState.args,
  error: true,
  value: 'Error Input',
  iconBefore: true,
  iconAfter: true,
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...DefaultState.args,
  disabled: true,
  value: 'Disabled Input',
};
