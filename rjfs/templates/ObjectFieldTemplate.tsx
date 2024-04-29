
import { Panel } from "primereact/panel";
import { ObjectFieldTemplateProps } from '@rjsf/utils';

const ObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
  const {
    title,
    properties,
  } = props;
  return (
    <Panel header={title} toggleable collapsed>
      <div>
        {properties.map((element: any) => (
          <div className='property-wrapper' key={element.content.key}>{element.content}</div>
        ))}
      </div>
    </Panel>
  );
};


export { ObjectFieldTemplate };