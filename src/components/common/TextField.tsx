import { FieldHookConfig, useField } from 'formik';

type Label = {
  label : string,
}
const TextField = ({label, ...props} : FieldHookConfig<string> & Label ) => {
  const [field, metas] = useField(props);

  return (
    <div>
      <p>{field.name}</p>
      <textarea {...field}>

      </textarea>
      {metas.touched && metas.error && (
        <p>{metas.error}</p>
      )}
    </div>
  );
};

export default TextField;