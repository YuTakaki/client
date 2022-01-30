import { FieldHookConfig, useField } from 'formik';
import React, { useEffect } from 'react';

type Label = {
  label : string,
  type: 'text' | 'password' | 'email'
}
const InputField = ({label, type, ...props} : FieldHookConfig<string> & Label ) => {
  const [field, metas] = useField(props);

  return (
    <div>
      <p>{field.name}</p>
      <input type={type} {...field}/>
      {metas.touched && metas.error && (
        <p>{metas.error}</p>
      )}
    </div>
  );
};

export default InputField