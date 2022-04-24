import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";

const validationSchema = Yup.object({
  lpurpose: Yup.string()
    // .matches(/^[a-z]+$/ , '*Please enter valid loan amount')
    .matches(/^[aA-zZ\s]+$/, "*Write proper loan purpose")
    .required("*Required"),
});
const LoanPurpose = () => {
  const formik = useFormik({
    initialValues: {
      lpurpose: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <FormControl fullWidth={true}>
      <TextField
        fullWidth={true}
        id="lpurpose"
        name="lpurpose"
        label="Loan Purpose"
        inputProps={{ maxLength: 50 }}
        value={formik.values.lpurpose}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lpurpose && Boolean(formik.errors.lpurpose)}
        helperText={formik.touched.lpurpose && formik.errors.lpurpose}
        size="medium"
        margin="normal"
      />
    </FormControl>
  );
};
export default LoanPurpose;
