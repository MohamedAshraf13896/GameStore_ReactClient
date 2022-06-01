const FormValidation = (values) => {
  let errors = {};
  if (!values.Name) {
    errors.Name = "Name Is Required !";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.Name)) {
    errors.Name = "Name Must have charachter not numbers only !";
  } else {
    errors.Namevalid = "Valid";
  }
  if (!values.Salary) {
    errors.Salary = "salary Is Required !";
  } else {
    errors.Salaryvalid = "Valid";
  }
  if (!values.Img) {
    errors.Img = "img is Reduired";
  } else {
    errors.Imgvalid = "Valid";
  }
  if (!values.Cateogory_ID) {
    errors.Cateogory_ID = "cateogory_Name is Required";
  } else {
    errors.Cateogory_IDvalid = "Valid";
  }
  if (!values.Platform_ID) {
    errors.Platform_ID = "platform_Name is Required";
  } else {
    errors.Platform_IDvalid = "Valid";
  }
  if (
    values.Name &&
    values.Salary &&
    values.Img &&
    values.Cateogory_ID &&
    values.Platform_ID
  ) {
    errors.Namevalid = "";
    errors.Salaryvalid = "";
    errors.Imgvalid = "";
    errors.Cateogory_IDvalid = "";
    errors.Platform_IDvalid = "";
  }

  return errors;
};

export default FormValidation;
