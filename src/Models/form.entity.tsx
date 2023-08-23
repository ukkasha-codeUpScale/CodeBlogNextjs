import React from "react";
import * as Yup from "yup";

export class FormEntity {
    password?:string;
 
  identifier?: string;

  static FormyupSchema() {
    return Yup.object({
        password:Yup.string().required("Enter user name"),

      identifier: Yup.string().email().required("identifier required"),
    });
  }
}
