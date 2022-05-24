import React from "react";
import { useForm } from "react-hook-form";

function Image() {
  const { register, handleSubmit } = useForm() 

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Upload</button>
    </form>
  );
}

export default Image;