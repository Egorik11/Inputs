import InputLabel from '../components/InputLabel/InputLabel';

export default {
  title: 'Components/InputLabel',
  components: InputLabel,
  argTypes: {
    text: {
      control: 'text',
    },
    labelSize: {
      control: 'select',
      options: ['xxs', 'sm'],
    },
    htmlFor: {
      control: 'text',
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
  },
};

const Template = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  htmlFor: 'Input id',
  labelSize: 'xxs',
  required: false,
  labelPosition: 'top',
  infoText: '',
  showInfoIcon: false,
};

export const Required = Template.bind({});
Required.args = {
  text: 'Required Label',
  htmlFor: 'Input id',
  required: true,
  labelSize: 'sm',
  labelPosition: 'left',
  showInfoIcon: false,
  infoText: '',
};

export const WithInfoIcon = Template.bind({});
WithInfoIcon.args = {
  text: 'Label with Info',
  htmlFor: 'input-id',
  labelSize: 'sm',
  required: false,
  labelPosition: 'top',
  showInfoIcon: true,
  infoText: 'Tooltip',
};
