import TextField from '@material-ui/core/TextField';
import MUIAutocomplete from '@material-ui/lab/Autocomplete';
import { Controller } from 'react-hook-form';

export default function Autocomplete({
  options = [],
  renderInput,
  getOptionLabel,
  onChange: ignored,
  control,
  defaultValue,
  name,
  renderOption,
}: any) {
  return (
    <Controller
      render={({ onChange, ...props }: any) => (
        <MUIAutocomplete
          options={options}
          getOptionLabel={getOptionLabel}
          renderOption={renderOption}
          renderInput={renderInput}
          onChange={(e: any, data: any) => {
            console.log(data);
            return onChange(data);
          }}
          {...props}
        />
      )}
      onChange={([, data]: any) => data}
      defaultValue={defaultValue}
      name={name}
      control={control}
    />
  );
}
