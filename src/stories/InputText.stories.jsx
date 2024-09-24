import InputText from '../components/InputText/InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
  argTypes: {
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
    disabled: {
      control: 'boolean',
      defaultValue: false,
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

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Input...',
  inputSize: '36',
  variant: 'Fill',
  disabled: false,
  quiet: false,
  iconBefore: false,
  iconAfter: false,
  alignment: 'left',
};
