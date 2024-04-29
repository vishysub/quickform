import { Checkbox } from "primereact/checkbox";
import { WidgetProps } from '@rjsf/utils';

const selectValue = (value, selected, all) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value, selected) => {
  return selected.filter((v) => v !== value);
};

const CheckboxesWidget = ({
  schema,
  id,
  label,
  disabled,
  options,
  value,
  readonly,
  required,
  uiSchema,
  onChange,
}: WidgetProps) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange = (option) => ({ checked }) => {const all = (enumOptions).map(({ value }) => value);
    if (checked) {
      onChange(selectValue(option.value, value, all));
    } else {
      onChange(deselectValue(option.value, value));
    }
  };
  const labelValue = uiSchema["ui:title"] || schema.title || label;
  
  return (
    <div>
      <div style={{ display: "flex" }}>
      {labelValue && (
     <label htmlFor={id} className="block mb-1">
       {labelValue}
       {required ? "*" : null}
     </label>
   )}
        {(enumOptions).map((option, index) => {
          const checked = Array.isArray(value) ? value.includes(option.value) : value === option.value;
          const itemDisabled = Array.isArray(enumDisabled) && (enumDisabled).includes(option.value);

          return (
            <div key={index}>
              <Checkbox
                inputId={`${id}_${index}`}
                checked={checked}
                required={required}
                tooltip={schema["ui:description"]}
                disabled={disabled || itemDisabled || readonly}
                onChange={_onChange}
              />
              <label htmlFor={`${id}_${index}`}>{option.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CheckboxesWidget };