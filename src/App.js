import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Input,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  lamount: Yup.number()
    .typeError("*Please enter valid loan amount")
    .min(2000, "*Loan Amount must be between $2000 and $20000")
    .max(20000, "*Loan Amount must be between $2000 and $20000")
    .required("*Loan Amount must be between $2000 and $20000"),
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      lamount: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <FormControl fullWidth={true}>
      <InputLabel>Loan Amount</InputLabel>
      <Input
        fullWidth={true}
        id="lamount"
        name="lamount"
        inputProps={{ maxLength: 5 }}
        value={formik.values.lamount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lamount && Boolean(formik.errors.lamount)}
        helperText={formik.touched.lamount && formik.errors.lamount}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        size="medium"
      />
      <FormHelperText
        id="lamount"
        error={formik.touched.lamount && Boolean(formik.errors.lamount)}
      >
        {formik.errors.lamount}
      </FormHelperText>
    </FormControl>
  );
};

export default App;

// <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//   <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//   <Input
//     id="lamount"
//     name="lamount"
//     label="Loan Amount"
//     value={formik.values.lamount}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     error={formik.touched.lamount && Boolean(formik.errors.lamount)}
//     helperText={formik.touched.lamount && formik.errors.lamount}
//     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//   />
// </FormControl>;
// <FormControl>
//         <InputLabel>Amount</InputLabel>
//         <OutlinedInput
//         id="lamount"
//         name="lamount"
//         value={formik.values.lamount}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.lamount && Boolean(formik.errors.lamount)}
//         helperText={formik.touched.lamount && formik.errors.lamount}
//         startAdornment={<InputAdornment position="start">$</InputAdornment>}
//         label="Amount" />
//         </FormControl>

// <form>
//         <Container>
//           <TextField
//             id="lamount"
//             name="lamount"
//             label="Loan Amount"
//             value={formik.values.lamount}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.lamount && Boolean(formik.errors.lamount)}
//             helperText={formik.touched.lamount && formik.errors.lamount}
//             prefix="$"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             size="medium"
//             margin="normal"
//           />
//         </Container>
//       </form>
