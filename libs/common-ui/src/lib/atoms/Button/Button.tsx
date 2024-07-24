import { MouseEventHandler, ComponentProps  } from "react";
import clsx from "clsx"

// Można też tak typować z użyciem Record, co pilnuje, żeby w obiekcie były tylko i wyłącznie porządane klucze, jak to będziemy typować zależy tylko od nas ;)
// const colors: Record< 'skirret-green' | 'electromagnetic' | 'hint-of-pensive', string> ={
//   'skirret-green': `#44bd32`,
//   'electromagnetic': "#2f3640",
//   'hint-of-pensive':'#dcdde1'
// }


const colors = {
  'skirret-green': `#44bd32`,
  'electromagnetic': "#2f3640",
  'hint-of-pensive':'#dcdde1'
}

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
  //onClick: () => void
  //onClick: MouseEventHandler<HTMLButtonElement>
  //classname?: string => istnieje piękniejszy sposob Pick<ComponentProps<'button'>, 'className'|'onClick' >....
};


export const Button = ({
  label,
  bgColor,
  className,
  color,
  type,
  onClick,
  ...rest //ponieważ mam zdefiniowany component props to mogę sobie użyć spread rest i są przekazywane wszystkie html-owe atrybuty <3 i cudownie to działa pod warunkiem że nie mamy Picka ;)
}: Pick<ComponentProps<'button'>, 'className'|'onClick'| "type" >& Props) => {
  const _color = color ? colors[color] : "";
  const _bgColor = bgColor ? colors[bgColor]: "";
const classes = clsx(
  'px-4 py-1',
  'text-sm text-white',
  'bg-blue-600',
  'font-semibold',
  'rounded-full border border-blue-200',
  'hover:text-white hover:bg-bluer-500 hover:border-transparent',
  className
)
  return <button
  type={type}
  style={{color: _color, backgroundColor: _bgColor}}
  onClick={onClick}
  className={classes}
  {...rest}
  >{label}</button>;
};


/* Jak używać ?
const UserForm = () =>{
  const handleClick: MouseEventHandler<HTMLButtonElement> = () =>{
    console.log("coś tam")
  }
  return (
    <div>
      <Button label={""} onClick={handleClick}/>
    </div>
  )
}
const
/*
*/
