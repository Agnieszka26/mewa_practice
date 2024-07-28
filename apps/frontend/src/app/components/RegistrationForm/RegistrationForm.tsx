import { Button, Input } from "@ems/common-ui";
import { ChangeEvent, FormEventHandler, useRef, useState } from 'react';
const RegistrationForm = () => {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

localStorage.setItem('userAge', `${age}`)
  }
  const [age, setAge] = useState<number>(() => {
    return parseInt(localStorage.getItem('userAge')|| '', 10 )
  })
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);


  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => { setAge(parseInt(event.currentTarget?.value)) }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <Input label={'First Name'} ref={firstNameRef} type="text" />
        <Input label={'Last Name'} ref={lastNameRef} type="text" />
        <Input label={'Age'} value={age} type="number" onChange={handleAgeChange} />
        <Button type="submit" label='send' />
      </form>
    </div>
  )
}

export default RegistrationForm
