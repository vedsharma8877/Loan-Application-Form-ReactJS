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
  fname: Yup.string()
    // .matches(/^[a-z]+$/ , '*Please enter valid loan amount')
    .matches(/^[aA-zZ\s]+$/, "*Write proper name")
    .required("*Required"),
});
const FirstName = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="fname"
            name="fname"
            label="First Name"
            inputProps={{ maxLength: 50 }}
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fname && Boolean(formik.errors.fname)}
            helperText={formik.touched.fname && formik.errors.fname}
          />
        </Container>
      </form>
    </div>
  );
};
export default FirstName;
