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
  sa2: Yup.string()
    .required("*Required"),
});
const StreetAddress2 = () => {
  const formik = useFormik({
    initialValues: {
      sa2: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="sa2"
            name="sa2"
            label="Street Address 2"
            inputProps={{ maxLength: 200 }}
            value={formik.values.sa2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sa2 && Boolean(formik.errors.sa2)}
            helperText={formik.touched.sa2 && formik.errors.sa2}
            size="medium"
            margin="normal"
            fullWidth
          />
        </Container>
      </form>
    </div>
  );
};
export default StreetAddress2;
