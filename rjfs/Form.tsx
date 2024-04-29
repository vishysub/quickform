import { useRef } from "react";
import { withTheme, ThemeProps } from '@rjsf/core';
import validator from "@rjsf/validator-ajv8";
import { Toast } from 'primereact/toast';
import { ObjectFieldTemplate, FieldTemplate } from "./templates";
import { CheckboxWidget, TextWidget, DropdownWidget, CheckboxesWidget , RadioWidget} from "./widgets"
import { RegistryWidgetsType } from "@rjsf/utils"

const Widgets: RegistryWidgetsType = {
    CheckboxWidget: CheckboxWidget,
    CheckboxesWidget: CheckboxesWidget,
    TextWidget: TextWidget,
    SelectWidget: DropdownWidget,
    RadioWidget: RadioWidget
};

//Temporary Log to view the changes done to state
const log = (type: any) => console.log.bind(console, type);

const ConfiguratorForm = ({ schema, uiSchema }) => {
    const toast = useRef(null);
    const submitForm = () => {toast.current.show({ severity: 'info', summary: 'Info', detail: "Form submitted" })};
    const theme: ThemeProps = {
        templates: { ObjectFieldTemplate ,FieldTemplate},
        widgets: { ...Widgets },
    }
    const ConfigForm = withTheme(theme)
    return (
        <div>
            <Toast ref={toast} />
            <ConfigForm
                schema={schema}
                uiSchema={uiSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={submitForm}
            />
        </div>
    )
}

export { ConfiguratorForm };
