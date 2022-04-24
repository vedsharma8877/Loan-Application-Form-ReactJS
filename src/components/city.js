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
  city: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "*Write proper city")
    .required("*Required"),
});
const City = () => {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            size="medium"
            margin="normal"
            inputProps={{ maxLength: 50 }}
          />
        </Container>
      </form>
    </div>
  );
};
export default City;
