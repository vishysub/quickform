import { WidgetProps } from '@rjsf/utils';
import { Checkbox } from 'primereact/checkbox';
import { CheckboxChangeParams } from 'primereact/types';


const CheckboxWidget = (props: WidgetProps) => {
    const {
        id,
        value,
        required,
        disabled,
        readonly,
        label,
        schema,
        uiSchema,
        onChange,
    } = props;

    const _onChange = ({ checked }: CheckboxChangeParams) => onChange(checked);

    const description = label || schema.description;
    const labelValue = uiSchema["ui:title"] || schema.title || label;
     {labelValue && (
        <label htmlFor={id} className="block mb-1">
          {labelValue}
          {required ? "*" : null}
        </label>
      )} 
    return (
        <div className="flex align-items-start gap-5">
            <Checkbox
                inputId={id}
                checked={typeof value === "undefined" ? false : value}
                required={required}
                tooltip={schema["ui:description"]}
                tooltipOptions={{ position: 'bottom' }}
                disabled={disabled || readonly}
                onChange={_onChange}
            />
            <label htmlFor={id}>{description}</label>

        </div>
    );
};

export { CheckboxWidget };