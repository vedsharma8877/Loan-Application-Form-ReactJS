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
  email: Yup.string().email('*Please write valid email address').max(255)
    .required("*Email is required"),
});
const Email = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
            size="normal"
            inputProps={{ maxLength: 50 }}
          />
        </Container>
      </form>
    </div>
  );
};
export default Email;
