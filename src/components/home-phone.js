import React from "react";
import { render } from "react-dom";
import { Formik, Field, useFormik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import InputMask from "react-input-mask";
import { TextField, Container } from "@mui/material";

const validationSchema =Yup.object().shape({
  hphone: Yup
    .string()
    .test("len", "Invalid Phone Number", (val = "") => {
      const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
      return val_length_without_dashes === 12;
    })
});
const HomePhone = () => {
  const formik = useFormik({
    initialValues: {
      hphone:"",
    },
    validationSchema: validationSchema,
  });
        return (
          <Container>
          <form>
              <InputMask
                mask="(999)999-9999"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hphone}
              >
                {() => (
                  <TextField
                    type="text"
                    label="Home Phone"
                    name="hphone"
                    margin="normal"
                    variant="outlined"
                    helperText={formik.touched.hphone ? formik.errors.hphone : ""}
                    error={formik.touched.hphone && Boolean(formik.errors.hphone)}
                  />
                )}
              </InputMask>
            </form>
            </Container>
        );
}
export default HomePhone;


// import {
//   Container,
//   TextField,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   FormControl,
//   FormHelperText,
//   Input
// } from "@mui/material";
// import MaskedInput from "react-text-mask";
// import { IMaskInput } from "react-imask";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import PropTypes from "prop-types";
// import React from 'react';

// const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
//   const { onChange, ...other } = props;
//   return (
//     <IMaskInput
//       {...other}
//       mask="(#00) 000-0000"
//       definitions={{
//         "#": /[1-9]/
//       }}
//       inputRef={ref}
//       onAccept={(value) => onChange({ target: { name: props.name, value } })}
//       overwrite
//     />
//   );
// });

// TextMaskCustom.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// export default function HomePhone() {
//   const [values, setValues] = React.useState({
//     textmask: "",
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value
//     });
//   };
//   return(
//     <Container>
//     <FormControl variant="outlined" margin="normal">
//     <InputLabel htmlFor="formatted-text-mask-input">Home Phone</InputLabel>
//     <Input
//       value={values.textmask}
//       onChange={handleChange}
//       name="textmask"
//       id="formatted-text-mask-input"
//       inputComponent={TextMaskCustom}
//     />
//   </FormControl>
//   </Container>
//   );
//   }


// the real code is above
// import {
//     Container,
//     TextField,
//     InputAdornment,
//     InputLabel,
//     OutlinedInput,
//     FormControl,
//   } from "@mui/material";
//   import { useFormik } from "formik";
//   import * as Yup from "yup";
  
//   const validationSchema = Yup.object({
//     hphone: Yup.number()
//       .typeError("*Please enter valid Home Phone Number"),
//   });
  
//   const HomePhone = () => {
//     const formik = useFormik({
//       initialValues: {
//         hphone: "",
//       },
//       validationSchema: validationSchema,
//     });
  
//     return (
//       <div>
//         <form>
//           <Container>
//             <TextField
//               id="hphone"
//               name="hphone"
//               label="Home Phone"
//               value={formik.values.hphone}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.hphone && Boolean(formik.errors.hphone)}
//               helperText={formik.touched.hphone && formik.errors.hphone}
//               size="medium"
//               margin="normal"
//             />
//           </Container>
//         </form>
//       </div>
//     );
//   };
  
//   export default HomePhone;
  