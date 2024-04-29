import { Dropdown } from "primereact/dropdown";
import { WidgetProps } from '@rjsf/utils';


const DropdownWidget = (props: WidgetProps) => {
    const {
        placeholder,
        required,
        disabled,
        value,
        onChange,
        options,
    } = props;
    const { enumOptions, enumDisabled } = options;
    type Option = { label: string; value: any; disabled: boolean };
    const optionsList = (enumOptions as any[]).map(({ label, value }: { label: string; value: any }): Option => {
        const disabled = Array.isArray(enumDisabled) && enumDisabled.includes(value);
        return { label, value, disabled };
    });
    return (
        <Dropdown
            value={typeof value === "undefined" ? "" : value}
            options={optionsList}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            onChange={(event) => { onChange(event.value) }}
        />
    );
}


export { DropdownWidget }