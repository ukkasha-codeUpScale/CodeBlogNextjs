import Image from "next/image";
import { Inter } from "next/font/google";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import { FormEntity } from "@/Models/form.entity";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function FormValidation() {
  const form = useFormik({
    // <Formik
    initialValues:new FormEntity(),
    validationSchema: FormEntity.FormyupSchema(),
    onSubmit: async (values) => {
      console.log(values, "valuessssssssssssssssssssssssss");
      console.log(form?.errors, "valuessssssssssssssssssssssssss");

      try {
        const dta = await axios.post(`http://localhost:1337/api/auths`,  FormEntity)
        console.log(dta , 'data=========');

      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <div className="mt-4 ">
      <form
        onSubmit={form?.handleSubmit}
        className="flex flex-col justify-between items-stretch  space-y-4  "
      >
        <input
          type="text"
          value={form?.values?.password}
          onChange={form?.handleChange}
          name="password"
          className="border-2 border-slate-500"
          placeholder="enter your user name"
        />
        {form?.errors.password && form?.touched.password ? (
          <div>{form?.errors?.password}</div>
        ) : null}

     


        <input
          type="text"
          value={form?.values?.identifier}
          onChange={form?.handleChange}
          name="identifier"
          className="border-2 border-slate-500"
          placeholder="enter your identifier"
        />
        {form?.errors.identifier && form?.touched.identifier ? (
          <div>{form?.errors?.identifier}</div>
        ) : null}

        <button className="das" type="submit">
          dasdas
        </button>
      </form>
    </div>
  );
}
