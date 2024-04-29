import { WidgetProps } from '@rjsf/utils';
import { InputText } from 'primereact/inputtext';


const TextWidget = (props: WidgetProps) => {
    const {
        id,
        placeholder,
        required,
        readonly,
        disabled,
        label,
        value,
        onChange,
        onBlur,
        onFocus,
        autofocus,
        options,
        schema,
        uiSchema
    } = props;
    const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => onChange(value === "" ? options.emptyValue : value);
    const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);
    const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
    const labelValue = uiSchema["ui:title"] || schema.title || label;
    return (
        <div className="flex align-items-start gap-2">
             {labelValue && (
        <label htmlFor={id}>
          {labelValue}
          {required ? "*" : null}
        </label>
      )}
            <InputText
                id={id}
                placeholder={placeholder}
                autoFocus={autofocus}
                required={required}
                disabled={disabled}
                readOnly={readonly}
                tooltip={schema["ui:description"]}
                value={value ? value : ""}
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
            />
        </div>
    );
};
export { TextWidget };