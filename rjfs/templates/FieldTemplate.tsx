import { FieldTemplateProps } from "@rjsf/utils";


const FieldTemplate = ({
  id,
  hidden,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  if (hidden) {
    return <>{children}</>;
  }

  return (
    <div className="field">
      {children}
      {displayLabel && rawDescription && (
        <div >
          {rawDescription}
        </div>
      )}
      {rawErrors.length > 0 && (
        <ul className="error-detail">
          {rawErrors.map((error: string) => (
            <li key={error} className="text-sm text-color-danger m-0 p-0">
              {error}
            </li>
          ))}
        </ul>
      )}
      {rawHelp && (
        <div
          id={id}
        >
          {rawHelp}
        </div>
      )}
    </div>
  );
};

export  {FieldTemplate};