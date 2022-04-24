import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl
} from "@mui/material";
import moment from 'moment';
import DatePicker from '@mui/lab/DatePicker';

// const validationSchema = Yup.object({
//   rd: Yup.string()
//     .nullable()
//     .test('Date of Birth', 'Should be greather than 18', function(value) {
//       return moment().diff(moment(value), 'years') >= 18;
//     }),
// });
// const rd = () => {
//   const formik = useFormik({
//     initialValues: {
//       rd: "",
//     },
//     validationSchema: validationSchema,
//   });

//   return (
//     <div>
//         <DatePicker
//             label="mm/dd/yyyy"
//             id="rd"
//             name="rd"
//             value={formik.values.rd}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     error={formik.touched.rd && Boolean(formik.errors.rd)}
//     helperText={formik.touched.rd && formik.errors.rd}
//         >
//         </DatePicker>
//     </div>
//   );
// };
// export default rd;\
// const ResidenceDate = () => {
//     const [value, setValue] = React.useState(null);
//     return(
//         <div>
//         <Container>
//         <DatePicker
//         label="Residence Date"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params}
//         margin="normal"
//         style={{width:"67%"}}
//          />}
//       />
// </Container>
// </div>

//     );
// };
// export default ResidenceDate;
// <form>
// <Container>
//   <TextField
//     id="rd"
//     name="rd"
//     label="First Name"
//     value={formik.values.rd}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     error={formik.touched.rd && Boolean(formik.errors.rd)}
//     helperText={formik.touched.rd && formik.errors.rd}
//   />
// </Container>
// </form>
const validationSchema = Yup.object({
  rd: Yup.string()
    .nullable()
    .test('Date of Birth', 'Required', function(value) {
      if(moment().diff(moment(value), 'years') >= 0 ){
      return moment().diff(moment(value), 'years') >= 0;
      }
    }),
});
const ResidenceDate = () => {
  const formik = useFormik({
          initialValues: {
            rd: "",
          },
          validationSchema: validationSchema,
        });
  return(
      <div>
      <Container>
      <DatePicker
      renderInput={(props) => (
        <TextField
          style={{width:"67%"}}
          size="normal"
          margin="normal"
          variant="outlined"
          required
          {...props}
          error={formik.touched.rd && Boolean(formik.errors.rd)}
  helperText={formik.touched.rd && formik.errors.rd}
        />
      )}
      name="rd"
      label="Residence Date"
      value={formik.values.rd}
      maxDate={moment(new Date())}
      onChange={(newValue) => {
        formik.setFieldTouched("rd");
        formik.setFieldValue(
          "rd",moment(newValue)
        );
      }}
      onKeyPress={() => formik.setFieldTouched("rd")}
    />
      </Container>
      </div>
  );
};
export default ResidenceDate;