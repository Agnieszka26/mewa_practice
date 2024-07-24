
import clsx from "clsx";
import { ComponentProps, forwardRef, Ref, useId } from "react";
import { Label } from "../../atoms/Label";

type Props = {
  label: string;
};
export const Input = forwardRef( ({ 'aria-label': ariaLabel, onChange, value, label, type, className, ...rest }: Pick<ComponentProps<'input'>, "value" | 'className' | 'onChange' | 'aria-label' | 'type' | 'ref'> & Props,
  ref: Ref<HTMLInputElement>

) => {
  const id = useId();

  const classesDiv = clsx(
    'px-4 py-1',
    'text-sm text-blue-600',
    'bg-blue-100',
    'font-semibold',
    'rounded-full border border-blue-500',
    'hover:text-bg-blue-500 hover:bg-blue-200 hover:border-transparent',)

  const classesInput = clsx(
    'px-4 py-1',)


  return <div className={classesDiv}>
    <Label id={id}> {label}</Label>

    <input
      className={classesInput}
      ref={ref}
      type={type}
      id={id}
      defaultValue={value}
      onChange={onChange}
      {...rest} />
  </div>

})
