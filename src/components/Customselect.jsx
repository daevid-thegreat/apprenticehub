import Select from 'react-select';

export default function CustomSelect({ options, ...rest }) {
  return (
    <Select
      options={options}
      {...rest}
    />
  );
}
