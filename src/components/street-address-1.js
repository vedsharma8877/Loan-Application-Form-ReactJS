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
  sa1: Yup.string()
    .required("*Required"),
});
const StreetAddress1 = () => {
  const formik = useFormik({
    initialValues: {
      sa1: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="sa1"
            name="sa1"
            label="Street Address 1"
            value={formik.values.sa1}
            inputProps={{ maxLength: 200 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sa1 && Boolean(formik.errors.sa1)}
            helperText={formik.touched.sa1 && formik.errors.sa1}
            size="medium"
            margin="normal"
            fullWidth
          />
        </Container>
      </form>
    </div>
  );
};
export default StreetAddress1;
