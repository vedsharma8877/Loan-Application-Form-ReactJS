import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Input,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  zip: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits")
    .required("*Required"),
});

const Zip = () => {
  const formik = useFormik({
    initialValues: {
      zip: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <Container>
        <form>
          <TextField
            id="zip"
            name="zip"
            label="Zip"
            inputProps={{ maxLength: 5 }}
            value={formik.values.lamount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
            size="medium"
            margin="normal"
          />
        </form>
      </Container>
    </div>
  );
};

export default Zip;
