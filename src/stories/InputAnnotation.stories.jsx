import InputAnnotation from '../components/InputAnnotation/InputAnnotation';

export default {
  title: 'Components/InputAnnotation',
  component: InputAnnotation,
  argTypes: {
    text: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['info', 'error'],
    },
    isError: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <InputAnnotation {...args} />;

export const InfoAnnotation = Template.bind({});
InfoAnnotation.args = {
  text: 'This is a hint text to help user.',
  type: 'info',
  isError: false,
};

export const ErrorAnnotation = Template.bind({});
ErrorAnnotation.args = {
  text: 'This is a hint text to help user.',
  type: 'error',
  isError: true,
};
